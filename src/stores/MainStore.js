import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "../stores/LayoutStore";
import SiteRoutes from "../stores/RoutesStore";

function MainStore() {
  return (
    <div>
      <Router>
        <MainLayout>
          <SiteRoutes/>
        </MainLayout>
      </Router>
    </div>
  );
}

export default MainStore;
