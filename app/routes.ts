import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("agents",        "./routes/agents.tsx"),
  route("agents/:id",    "./routes/agents.$id.tsx"),
  route("projects",      "./routes/projects.tsx"),
  route("projects/:id",  "./routes/projects.$id.tsx"),
  route("dashboard",     "./routes/dashboard.tsx"),
  route("analytics",     "./routes/analytics.tsx"),
] satisfies RouteConfig;
