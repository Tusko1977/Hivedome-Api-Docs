// Public docs: URL path (without leading/trailing slash) -> OpenAPI file in /public.
// This file is public, so only add docs everyone may see. description is optional and appears on the card.
//
// Top-level paths (e.g. "itas-api") get a card on the landing page - point these at the latest version.
// Version paths (e.g. "itas-api/v3.7") work at their URL but get no card.
//
// Hidden (client) docs are NOT listed here. They open by folder name instead:
//   /<folder>/<version>  ->  /openapi/<folder>/<version>/openapi.yaml
// and their "latest" short URL is a redirect in vercel.json.
const SPECS = {
  "itas-api":   { title: "ITAS API v3.7", url: "/openapi/itas-api/v3.7/openapi.yaml",
                  description: "ITAS API is to provide external access to the ITAS system, both in terms of data and functionality" },
  "itas-api/v3.7":   { title: "ITAS API v3.7", url: "/openapi/itas-api/v3.7/openapi.yaml",
                  description: "ITAS API is to provide external access to the ITAS system, both in terms of data and functionality" },
  "client-services":   { title: "ITAS Client Services API v1.04", url: "/openapi/client-services/v1.4/openapi.yaml",
                  description: "DocMan, Data Query Service, Data Modification Service and Reporting Data" },
  "client-services/v1.4":   { title: "ITAS Client Services API v1.04", url: "/openapi/client-services/v1.4/openapi.yaml",
                  description: "DocMan, Data Query Service, Data Modification Service and Reporting Data" },
  "invoicing":   { title: "ITAS Invoicing", url: "/openapi/invoicing/v1.0/openapi.yaml",
                   description: "Manual invoices, trade invoicing, trade locking and reference data." },
  "e-invoicing":   { title: "ITAS e-Invoicing Custom API v1.04", url: "/openapi/e-invoicing/v1.4/openapi.yaml",
                  description: "Endpoints for Incoming and Outgoing e-invoice processes" },
   "e-invoicing/v1.4":   { title: "ITAS e-Invoicing Custom API v1.04", url: "/openapi/e-invoicing/v1.4/openapi.yaml",
                  description: "Endpoints for Incoming and Outgoing e-invoice processes" },
  "itas-events-v2":   { title: "ITAS Events API v2.0", url: "/openapi/v2.0/itas-events-v2/openapi.yaml",
                  description: "Endpoints for Events Messaging" },
};
