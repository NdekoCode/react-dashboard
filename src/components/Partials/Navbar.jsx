import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import StateContext from "../../libs/context/AppContext";
import avatar from "../../libs/data/images/avatar.jpg";
const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent
      className="flex items-center justify-center"
      content={title}
      position="BottomCenter"
    >
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ backgroundColor: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        >
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );
};
const Navbar = () => {
  const { toggleMenu } = StateContext();
  const handleClick = (value) => {};

  return (
    <nav className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={toggleMenu}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color="blue"
          dotColor="#03c9d7"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color="blue"
          dotColor="#03c9d7"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center cursor-pointer p-1 gap-2 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={avatar}
              className="rounded-full object-cover w-8 h-8"
              alt="User profile"
            />
            <p className="text-14 text-gray-400">
              <span>Hi, </span>
              <span className="ml-1 font-bold">NdekoCode</span>
            </p>
          </div>
        </TooltipComponent>
      </div>
    </nav>
  );
};

export default Navbar;
