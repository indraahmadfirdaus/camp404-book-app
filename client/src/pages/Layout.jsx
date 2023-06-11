import React from "react";
import c404Logo from "../assets/c404.png";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-800 h-[100vh] py-36 px-72">
      <div className="bg-gray-600 p-8 rounded-lg">
        <div className="flex items-center justify-center">
          <img src={c404Logo} class="h-24 mr-2" alt="logo" />
          <p className="text-2xl text-white font-bold">Book App</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
