import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import UserInput from "../features/user/UserInput";

function AppLayout() {
  return (
    <>
      <form
        className="fixed flex h-full w-[38rem] flex-col rounded-lg pt-16 bg-white-200 pl-36 shadow-lg space-y-5"
        action=""
      >
        <h3 className="text-xl font-bold">New invoice</h3>
        <UserInput />
      </form>
      <SideBar />

      <div className="flex items-center justify-center pt-16">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
