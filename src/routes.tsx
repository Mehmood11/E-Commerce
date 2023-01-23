import React from "react";
import Layout from "./Layout/Layout";
import { Route, Routes, useLocation } from "react-router";
import MainComponent from "./Component/MainComponent/MainComponent";
import { Error } from "./Error/Error";
import Contact from "./Component/Contact/Contact";
import { AnimatePresence } from "framer-motion";

const Routess = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<MainComponent />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Routess;
