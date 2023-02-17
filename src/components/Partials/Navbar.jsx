import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import StateContext from "../../libs/context/AppContext";
import UserStateContext from "../../libs/context/UserInteractionContext";
import avatar from "../../libs/data/images/avatar.jpg";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
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
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};
const Navbar = () => {
  const { toggleMenu } = StateContext();
  const { isClicked, toggleIsClicked } = UserStateContext();
  const { chat, cart, userProfile, notification } = isClicked;

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
          customFunc={() => toggleIsClicked("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => toggleIsClicked("chat")}
          color="blue"
          dotColor="#03c9d7"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          customFunc={() => toggleIsClicked("notification")}
          color="blue"
          dotColor="#03c9d7"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center cursor-pointer p-1 gap-2 hover:bg-light-gray rounded-lg text-14 text-gray-400"
            onClick={() => toggleIsClicked("userProfile")}
          >
            <img
              src={avatar}
              className="rounded-full object-cover w-8 h-8"
              alt="User profile"
            />
            <p>
              <span>Hi, </span>
              <span className="ml-1 font-bold">NdekoCode</span>
            </p>
            <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>
        {chat && <Chat />}
        {notification && <Notification />}
        {userProfile && <UserProfile />}
        {cart && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
