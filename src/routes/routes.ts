import { Login } from "../views/Auth/Login/Login";
import {
  type ApplicationRoute,
  RouteName,
  RoutePrefix,
} from "./routes.interface";

const ROUTES: Record<RouteName, ApplicationRoute> = {
  [RouteName.Home]: {
    path: RoutePrefix.Login,
    component: Login,
    exact: true,
  },
  [RouteName.Login]: {
    path: RoutePrefix.Login,
    component: Login,
    exact: true,
  },
};

export default ROUTES;
