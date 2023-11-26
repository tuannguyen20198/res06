import React from "react";
import {Route, Routes} from "react-router-dom";
import path from "./utils/path";
import {
  PublicLayout,
  Home,
  AboutUs,
  OurAgents,
  Properties,
  Search,
} from "./pages/public";
import {Modal} from "./components";
import useAppStore from "./store/useAppStore";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const {isShowModal, contentModal} = useAppStore();
  return (
    <>
      {isShowModal && <Modal contentModal={contentModal} />}
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT_US} element={<AboutUs />} />
          <Route path={path.OUR_AGENTS} element={<OurAgents />} />
          <Route path={path.PROPERTIES} element={<Properties />} />
          <Route path={path.SEARCH} element={<Search />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
