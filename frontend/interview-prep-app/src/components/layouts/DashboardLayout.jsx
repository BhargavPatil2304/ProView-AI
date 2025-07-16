import React, { useContext } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../../context/UserContext";

const DashboardLayout = ({ children }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-5 rounded">
      <Navbar />
      {user && <div>{children}</div>}
    </div>
  );
};

export default DashboardLayout;
