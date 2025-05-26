import React, { Suspense, type JSX } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import ROUTES from "./routes/routes";
import { RoutePrefix, type RouteName } from "./routes/routes.interface";
import { useThemeContext } from "./contexts/ThemeContext";
import { ThemeToggle } from "./common/components/ThemeToggle/ThemeToggle";

function App() {
  const { mode, toggleTheme } = useThemeContext();

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

  return (
    <Suspense fallback={<CircularProgress />}>
      <ThemeToggle onClick={toggleTheme} defaultChecked={mode === "dark"} />
      <Router>
        <Routes>
          {getAppRoutes()}
          <Route
            path="*"
            element={<Navigate to={RoutePrefix.Home} replace />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
