export enum RouteName {
  Home = "home",
  Login = "login",
}

export enum RoutePrefix {
  Home = "/",
  Login = "/login",
}

export interface ApplicationRoute {
  path: string;
  component: React.FC;
  exact: boolean;
}
