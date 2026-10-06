// URL path (without leading/trailing slash) -> OpenAPI file in /public.
// Add a line here for each new doc or version.
// listed: true shows the doc on the landing page; hidden docs still work at their URL.
const SPECS = {
  "a1b1ced896-cofco":       { title: "COFCO Custom API", url: "/openapi/a1b1ced896-cofco/v1.1/openapi.yaml", listed: false }, // latest
  "a1b1ced896-cofco/v1.1":  { title: "COFCO Custom API v1.1", url: "/openapi/a1b1ced896-cofco/v1.1/openapi.yaml", listed: false },
  "invoicing":   { title: "ITAS Invoicing", url: "/openapi/invoicing/openapi.yaml", listed: true },
};
