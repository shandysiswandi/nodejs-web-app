import React from "react";
import { useLocation } from "react-router-dom";

const PageTitleUpdater: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Home Page",
      "/login": "Login Page",
    };
    document.title = titles[location.pathname] || "Not Found";
  }, [location]);

  return null;
};

export default PageTitleUpdater;
