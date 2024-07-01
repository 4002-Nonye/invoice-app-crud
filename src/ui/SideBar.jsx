import logo from "../assets/logo.svg";
import moonIcon from "../assets/moon.svg";
import sunIcon from "../assets/sun.svg";
import avatar from "../assets/avatar.svg";

function SideBar() {
  return (
    <div className="fixed z-50 left-0 top-0 flex h-20 w-full items-center justify-between bg-darkblue-200 lg:h-screen lg:w-[unset] lg:flex-col lg:rounded-br-3xl lg:rounded-tr-3xl">
      <img src={logo} alt="logo" className="h-20 lg:h-[unset]" />

      <div className="flex items-center divide-x-2 divide-grey-100 lg:flex-col lg:divide-x-0 lg:divide-y-[0.5px]">
        <img
          src={moonIcon}
          alt="themeIcon"
          className="cursor-pointer p-5 lg:p-8"
        />
        <img src={avatar} alt="avatar" className="w-full p-5 lg:p-7" />
      </div>
    </div>
  );
}

export default SideBar;
