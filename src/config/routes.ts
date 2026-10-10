/**
 * Centralized Route Configuration for EasyRoute Trips.
 * Defines all public, indexable static routes, metadata for SEO/sitemap,
 * and navigation labels.
 */

export interface StaticRouteConfig {
  path: string;
  label?: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export const PUBLIC_STATIC_ROUTES: StaticRouteConfig[] = [
  { path: "/", label: "Home", changefreq: "weekly", priority: 1.0 },
  { path: "/packages", label: "Tour Packages", changefreq: "daily", priority: 0.9 },
  { path: "/destinations", label: "Destinations", changefreq: "weekly", priority: 0.9 },
  { path: "/group-trips", label: "Group Trips", changefreq: "monthly", priority: 0.8 },
  { path: "/custom-trips", label: "Custom Trips", changefreq: "monthly", priority: 0.8 },
  { path: "/corporate-college-tours", label: "Corporate & College", changefreq: "monthly", priority: 0.8 },
  { path: "/about", label: "About", changefreq: "monthly", priority: 0.7 },
  { path: "/contact", label: "Contact", changefreq: "monthly", priority: 0.7 },
  { path: "/cancellation-policy", label: "Cancellation", changefreq: "yearly", priority: 0.3 },
  { path: "/privacy-policy", label: "Privacy Policy", changefreq: "yearly", priority: 0.3 },
  { path: "/terms", label: "Terms of Service", changefreq: "yearly", priority: 0.3 },
];

export const NAV_ROUTES = [
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Tour Packages" },
  { to: "/group-trips", label: "Group Trips" },
  { to: "/custom-trips", label: "Custom Trips" },
  { to: "/corporate-college-tours", label: "Corporate & College" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
