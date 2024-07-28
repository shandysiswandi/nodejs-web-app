import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageTitleUpdater from "./PageTitleUpdater";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<div>Loading...</div>}>
        <PageTitleUpdater />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
