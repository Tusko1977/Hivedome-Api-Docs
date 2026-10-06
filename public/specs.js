// Docs shown on the landing page: URL path (without leading/trailing slash) -> OpenAPI file in /public.
// This file is public, so only add docs everyone may see. description is optional and appears on the card.
//
// Hidden (client) docs are NOT listed here. They open by folder name instead:
//   /<folder>/<version>  ->  /openapi/<folder>/<version>/openapi.yaml
// and their "latest" short URL is a redirect in vercel.json.
const SPECS = {
  "client-services":   { title: "ITAS Client Services API v1.04", url: "/openapi/client-services/openapi.yaml",
                  description: "DocMan, Data Query Service, Data Modification Service and Reporting Data" },
  "invoicing":   { title: "ITAS Invoicing", url: "/openapi/invoicing/openapi.yaml",
                   description: "Manual invoices, trade invoicing, trade locking and reference data." },
  "e-invoicing":   { title: "ITAS e-Invoicing Custom API v1.04", url: "/openapi/e-invoicing/openapi.yaml",
                  description: "Endpoints for Incoming and Outgoing e-invoice processes" },
};
