import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("platforms", "routes/platforms.tsx"),
  route("residents", "routes/residents.tsx"),
  route("vacancies", "routes/vacancies.tsx"),
  route("partners", "routes/partners.tsx"),
  route("news", "routes/news.tsx"),
  route("contacts", "routes/contacts.tsx"),
  route("profile", "routes/profile.tsx"),
] satisfies RouteConfig;
