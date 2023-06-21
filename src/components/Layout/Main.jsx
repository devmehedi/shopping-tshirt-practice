import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { ToastBar, Toaster } from "react-hot-toast";
import { ToastContainer, toast } from 'react-toastify';
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Toaster>
      {(t) => (
    <ToastBar
      toast={t}
      style={{
        ...t.style,
        animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
      }}
    />
  )}
      </Toaster>
    </div>
  );
};

export default Home;
