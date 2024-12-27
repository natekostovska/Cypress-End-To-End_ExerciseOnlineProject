/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverPlatform: "node",
  future: {
    v2_errorBoundary: true,
    v2_meta: false,
    v2_normalizeFormMethod: true,
    v2_headers: true,
    v2_routeConvention: true,
   // unstable_tailwind: true,
    v2_dev: true,
  },
  tailwind: true, 
  serverModuleFormat: 'cjs', // or 'cjs' if you prefer CommonJS
};
