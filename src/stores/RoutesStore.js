import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomeView"
import Services from "../pages/services/ServicesView";
import Portfolio from "../pages/portfolio/PortfolioView";
import AboutUs from "../pages/aboutUs/AboutView";
import ContactUs from "../pages/contactUs/ContactView";
import TermsPrivacy from "../pages/termsPrivacy/TermsPrivacyView";
import NotFound from "../pages/notFound/NotFoundView";

const allRoutes = [
    {
      path: '/', 
      element: <Home />,
      title: "Home"
    },
    {
      path: '/services',
      element: <Services />,
      title: "Services"
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
      title: "Portfolio"
    },
    {
        path: '/about-us',
        element: <AboutUs />,
        title: "About Us"
    },
    {
        path: '/contact-us',
        element: <ContactUs />,
        title: "Contact Us"
    },
    {
        path: '/terms-and-privacy',
        element: <TermsPrivacy />,
        title: "Terms & Privacy"
    },
  ];

export {allRoutes};

function MainRoutes() {
    return(
        <Routes>
            {allRoutes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />
                ))}
        <Route path="*" element={<NotFound />}></Route>
        </Routes>
        
    )
}

export default MainRoutes;