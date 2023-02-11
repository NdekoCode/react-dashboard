/* eslint-disable jsx-a11y/anchor-is-valid */
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const activeMenu = true;
  return (
    <aside className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu ? (
        <div to="/" className="flex justify-between items-center">
          <Link
            onClick={() => {}}
            className="items-center mt-4 ml-3 flex text-slate-900 text-xl font-extrabold tracking-tighter dark:text-white"
          >
            <SiShopware className="text-3xl" />
            <button type="button">Shoppy</button>
          </Link>
          <TooltipComponent content="Menu" position="bottomCenter">
            <button
              type="button"
              onClick={() => {}}
              className="text-xl rounded-full p-3 hover:bg=light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
      ) : null}
    </aside>
  );
};

export default Sidebar;
