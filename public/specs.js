// URL path (without leading/trailing slash) -> OpenAPI file in /public.
// Add a line here for each new doc or version.
// listed: true shows the doc on the landing page; hidden docs still work at their URL.
// description is optional and appears on the landing page card.
const SPECS = {
  "a1b1ced896-cofco":       { title: "COFCO Custom API", url: "/openapi/a1b1ced896-cofco/v1.1/openapi.yaml", listed: false }, // latest
  "a1b1ced896-cofco/v1.1":  { title: "COFCO Custom API v1.1", url: "/openapi/a1b1ced896-cofco/v1.1/openapi.yaml", listed: false },
  "e7d6d863-edfman":       { title: "ED&FMan Custom API", url: "/openapi/e7d6d863-edfman/v1.7/openapi.yaml", listed: false }, // latest
  "e7d6d863-edfman/v1.7":       { title: "ED&FMan Custom API", url: "/openapi/e7d6d863-edfman/v1.7/openapi.yaml", listed: false },
  "client-services":   { title: "ITAS Client Services API v1.04", url: "/openapi/client-services/openapi.yaml", listed: true,
                  description: "DocMan, Data Query Service, Data Modification Service and Reporting Data" },
  "invoicing":   { title: "ITAS Invoicing", url: "/openapi/invoicing/openapi.yaml", listed: true,
                   description: "Manual invoices, trade invoicing, trade locking and reference data." },
  "e-invoicing":   { title: "ITAS e-Invoicing Custom API v1.04", url: "/openapi/e-invoicing/openapi.yaml", listed: true,
                  description: "Endpoints for Incoming and Outgoing e-invoice processes" },
};
