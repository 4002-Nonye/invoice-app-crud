import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import UserInput from "../features/user/UserInput";
import ClientInput from "../features/client/ClientInput";
import Calendar from "./Calendar";
import PaymentTerms from "./PaymentTerms";
import ItemList from "./ItemList";
import Button from "./Button";

function AppLayout() {
  return (
    <>
      <form
        className="fixed z-40 flex h-full flex-col space-y-4 overflow-scroll rounded-lg bg-white-200 pb-16  lg:pl-36 lg:pr-10 px-5 pt-32 lg:pt-16 shadow-lg xl:w-[54.5%]"
        action=""
      >
        <h3 className="text-3xl font-bold">New invoice</h3>
        <UserInput />
        <ClientInput />
        <div className="flex w-full pt-5 gap-10">
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
         <div className="flex gap-7 justify-center md:justify-between pt-16">
          <Button type='discard'>Discard</Button>
          <div className="gap-7 flex ">
            <Button type='draft'>Save as Draft</Button>
            <Button type='submit'>Save & Send</Button>
          </div>
        </div>
      </form>
      <SideBar />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-screen bg-black bg-opacity-20">
        overlay
      </div>
      <div className="flex items-center justify-center pt-16">



       
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
