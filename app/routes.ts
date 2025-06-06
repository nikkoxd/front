import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),

  ...prefix("platforms", [
    index("routes/platforms.tsx"),
    route(":id", "routes/platform.tsx"),
  ]),

  ...prefix("residents", [
    index("routes/residents.tsx"),
    route(":id", "routes/resident.tsx"),
  ]),

  route("vacancies/:id?", "routes/vacancies.tsx"),

  route("news/:id?", "routes/news.tsx"),

  route("partners", "routes/partners.tsx"),
  route("contacts", "routes/contacts.tsx"),
  route("profile", "routes/profile.tsx"),
] satisfies RouteConfig;
