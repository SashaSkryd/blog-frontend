import { lazy } from "react";

const routes = [
  {
    label: "Домашняя страница",
    path: "/",
    exact: true,
    component: lazy(() => import("./pages/home/home")),
    redirectTo: "/auth",
    privated: true,
    restricted: true,
  },
  {
    label: "Страница авторизации",
    path: "/auth",
    exact: true,
    component: lazy(() => import("./pages/auth/auth")),
    redirectTo: "/auth",
    privated: false,
    restricted: true,
  },
  {
    label: "Страница не найдена",
    // path: "/notFound",
    exact: true,
    component: lazy(() => import("./pages/notFound/notFound")),
    redirectTo: "/notFound",
    privated: false,
    restricted: true,
  },
];

export default routes;
