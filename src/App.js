import React, { lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";
import PreLoader from "./components/PreLoader";
import "./App.css";

export const appRoutes = [
  {
    path: "/",
    layout: lazy(() => import("./components/Layout")),
    component: lazy(() => import("./components/Home")),
  },
  {
    path: "/users",
    layout: lazy(() => import("./components/Layout")),
    component: lazy(() => import("./components/UsersData")),
  }
];



function App() {
  return (
    <Router>
      <Routes>
        {appRoutes?.map((appRoute) => {
          const Layout = appRoute.layout
          const Component = appRoute.component;

          return (
            <Route
              path={appRoute.path}
              element={
                <React.Suspense fallback={<PreLoader />}>
                  <Layout><Component /></Layout>
                  
                </React.Suspense>
              }
              key={appRoute.path}
            />
          );
        })}
        <Route path="/" element={<Home />} />
        <Route path="404" element={<NoMatch homeRoute="/"/>} />
        <Route path="*" element={<NoMatch homeRoute="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
