import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const CANONICAL_DOMAIN = "https://easyroutetrips.in";

function escapeXml(str) {
  return str.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
      default: return c;
    }
  });
}

function normalizeUrl(routePath) {
  const cleaned = routePath.trim();
  if (!cleaned || cleaned === "/") {
    return `${CANONICAL_DOMAIN}/`;
  }
  const normalizedPath = "/" + cleaned.replace(/^\/+|\/+$/g, "");
  return `${CANONICAL_DOMAIN}${normalizedPath}`;
}

export function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];
  const urlEntries = new Map();

  function addUrl(rawPath, options = {}) {
    if (!rawPath || typeof rawPath !== "string") return;
    if (rawPath.includes("*") || rawPath.includes(":") || rawPath.includes("$")) return;
    if (rawPath.startsWith("/api") || rawPath.startsWith("/_") || rawPath.startsWith("/admin")) return;

    const fullUrl = normalizeUrl(rawPath);
    if (!urlEntries.has(fullUrl)) {
      urlEntries.set(fullUrl, {
        loc: fullUrl,
        lastmod: options.lastmod || today,
        changefreq: options.changefreq || "weekly",
        priority: typeof options.priority === "number" ? options.priority.toFixed(1) : (rawPath === "/" ? "1.0" : "0.8"),
      });
    }
  }

  // 1. Read static routes from src/config/routes.ts
  const routesConfigPath = path.join(ROOT_DIR, "src", "config", "routes.ts");
  if (fs.existsSync(routesConfigPath)) {
    const content = fs.readFileSync(routesConfigPath, "utf-8");
    const staticBlockMatch = content.match(/PUBLIC_STATIC_ROUTES[^{]*=\s*\[([\s\S]*?)\];/);
    if (staticBlockMatch) {
      const items = [...staticBlockMatch[1].matchAll(/\{([^}]+)\}/g)];
      for (const item of items) {
        const itemStr = item[1];
        const pathMatch = itemStr.match(/path:\s*["']([^"']+)["']/);
        const freqMatch = itemStr.match(/changefreq:\s*["']([^"']+)["']/);
        const prioMatch = itemStr.match(/priority:\s*([0-9.]+)/);
        if (pathMatch) {
          addUrl(pathMatch[1], {
            changefreq: freqMatch ? freqMatch[1] : undefined,
            priority: prioMatch ? parseFloat(prioMatch[1]) : undefined,
          });
        }
      }
    }
  }

  // 2. Discover routes from src/routes/*.tsx (excluding root, param routes, dynamic segments)
  const routesDir = path.join(ROOT_DIR, "src", "routes");
  if (fs.existsSync(routesDir)) {
    const files = fs.readdirSync(routesDir);
    for (const file of files) {
      if (!file.endsWith(".tsx")) continue;
      if (file.startsWith("__") || file.includes("$") || file.includes(".test.") || file.includes(".spec.")) continue;

      let routePath;
      if (file === "index.tsx") {
        routePath = "/";
      } else if (file.endsWith(".index.tsx")) {
        routePath = "/" + file.replace(".index.tsx", "");
      } else {
        routePath = "/" + file.replace(".tsx", "");
      }
      addUrl(routePath);
    }
  }

  // 3. Read destinations from src/data/destinations.ts
  const destinationsPath = path.join(ROOT_DIR, "src", "data", "destinations.ts");
  if (fs.existsSync(destinationsPath)) {
    const content = fs.readFileSync(destinationsPath, "utf-8");
    const slugMatches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
    for (const match of slugMatches) {
      addUrl(`/destinations/${match[1]}`, {
        changefreq: "weekly",
        priority: 0.8,
      });
    }
  }

  // 4. Read packages from src/data/packages.ts
  const packagesPath = path.join(ROOT_DIR, "src", "data", "packages.ts");
  if (fs.existsSync(packagesPath)) {
    const content = fs.readFileSync(packagesPath, "utf-8");
    const slugMatches = [...content.matchAll(/^\s*slug:\s*["']([^"']+)["']/gm)];
    for (const match of slugMatches) {
      addUrl(`/packages/${match[1]}`, {
        changefreq: "daily",
        priority: 0.8,
      });
    }
  }

  // Build XML
  const urlsArray = Array.from(urlEntries.values());
  const xmlLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const entry of urlsArray) {
    xmlLines.push("  <url>");
    xmlLines.push(`    <loc>${escapeXml(entry.loc)}</loc>`);
    xmlLines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
    xmlLines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
    xmlLines.push(`    <priority>${entry.priority}</priority>`);
    xmlLines.push("  </url>");
  }

  xmlLines.push("</urlset>\n");

  const sitemapXml = xmlLines.join("\n");

  // Write to public/sitemap.xml
  const publicDir = path.join(ROOT_DIR, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const publicSitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(publicSitemapPath, sitemapXml, "utf-8");
  console.log(`[sitemap] Successfully generated sitemap with ${urlsArray.length} URLs at: ${publicSitemapPath}`);

  // Also sync to build output directories if they exist
  const outputDirs = [
    path.join(ROOT_DIR, ".output", "public"),
    path.join(ROOT_DIR, ".vercel", "output", "static"),
    path.join(ROOT_DIR, "dist"),
  ];

  for (const outDir of outputDirs) {
    if (fs.existsSync(outDir)) {
      const targetPath = path.join(outDir, "sitemap.xml");
      fs.writeFileSync(targetPath, sitemapXml, "utf-8");
      console.log(`[sitemap] Synced sitemap to output directory: ${targetPath}`);
    }
  }

  return sitemapXml;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSitemap();
}
