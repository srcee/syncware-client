import React, { Suspense, type JSX } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import ROUTES from "./routes/routes";
import { RoutePrefix, type RouteName } from "./routes/routes.interface";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  const getAppRoutes = (): JSX.Element[] => {
    const paths: JSX.Element[] = [];
    for (const route in ROUTES) {
      if (route in ROUTES) {
        const { path, component } = ROUTES[route as RouteName];

        paths.push(
          <Route
            key={path}
            path={path}
            element={React.createElement(component)}
          />
        );
      }
    }
    return paths;
  };

  // const { data } = useGetUserByIdQuery({ id: 2 });

  return (
    <Suspense fallback={<CircularProgress />}>
      <ThemeContextProvider>
        <Router>
          <Routes>
            {getAppRoutes()}
            <Route
              path="*"
              element={<Navigate to={RoutePrefix.Home} replace />}
            />
          </Routes>
        </Router>
      </ThemeContextProvider>
    </Suspense>
  );
}

export default App;
