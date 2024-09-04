import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";


function AppLayout() {
  const uiTheme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    if (uiTheme === "dark") document.body.classList.add("dark");
    else {
      document.body.classList.remove("dark");
    }
  }, [uiTheme]);


  return (
    <>
      <SideBar />
      <main className="flex items-center justify-center pt-16">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
