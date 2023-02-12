import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import StateContext from "../../libs/context/AppContext";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
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
  const { activeMenu, toggleMenu } = StateContext();
  return (
    <nav className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={toggleMenu}
        color="blue"
        icon={<AiOutlineMenu />}
      />
    </nav>
  );
};

export default Navbar;
