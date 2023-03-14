import React from "react";
import Navigation from '../pages/partial/navigation/NavigationView';
import Footer from "../pages/partial/footer/FooterView";
import SideBar from "../pages/partial/sidebar/SidebarView"

const MainLayout = ({ children }) => {
    return (
      <>
        <Navigation />
        <SideBar />
        <main>{children}</main>
        <Footer />
      </>
    )
}
  
export default MainLayout;