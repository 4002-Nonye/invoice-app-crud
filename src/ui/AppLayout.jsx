import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import UserInput from "../features/user/UserInput";
import ClientInput from "../features/client/ClientInput";
import Calendar from "./Calendar";
import PaymentTerms from "./PaymentTerms";
import ItemList from "./ItemList";
import Button from "./Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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
      <form
        className="fixed z-40 flex h-full flex-col space-y-4 overflow-scroll rounded-lg dark:bg-darkblue-500 bg-white-200 px-5 pb-16 pt-32 shadow-lg lg:pl-36 lg:pr-10 lg:pt-16 xl:w-[54.5%]"
        action=""
      >
        <h3 className="text-3xl font-bold dark:text-white-200">New invoice</h3>
        <UserInput />
        <ClientInput />
        <div className="flex w-full gap-10 pt-5">
          <Calendar />
          <PaymentTerms />
        </div>
        <label htmlFor="product-description" className="label pt-4">
          Product Description
        </label>
        <input
          type="text"
          name="product-description"
          id="product-description"
          value="eg: Graphic Design Service"
          className="input"
        />
        <ItemList />
      {/* CTAs */}
      <div className="flex justify-center gap-7 pt-16 md:justify-between">
          <Button type="discard">Discard</Button>
          <div className="flex gap-7">
            <Button type="draft">Save as Draft</Button>
            <Button type="submit">Save & Send</Button>
          </div>
        </div>
      </form>
      <SideBar />
      <div className="fixed bottom-0 left-0 right-0 top-0 h-screen bg-black bg-opacity-20 backdrop-blur z-20">

      </div>
      <div className="flex items-center justify-center pt-16">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
