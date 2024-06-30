import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import UserInput from "../features/user/UserInput";
import ClientInput from "../features/client/ClientInput";
import Calendar from "./Calendar";
import PaymentTerms from "./PaymentTerms";
import ItemList from "./ItemList";

function AppLayout() {
  return (
    <>
      <form
        className="fixed flex h-full flex-col space-y-4 overflow-scroll rounded-lg bg-white-200 pb-16 pl-36 pr-10 pt-16 shadow-lg"
        action=""
      >
        <h3 className="text-3xl font-bold">New invoice</h3>
        <UserInput />
        <ClientInput />
        <div className="flex w-full justify-between pt-5">
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
      </form>
      <SideBar />

      <div className="flex items-center justify-center pt-16">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
