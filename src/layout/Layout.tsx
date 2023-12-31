import React from "react";
import NavBar from "./NavBar/NavBar";

function Layout({ children }) {
  return (
    <>
      <div className="bg-main text-white">
        <NavBar />
        {children}
      </div>
    </>
  );
}

export default Layout;
