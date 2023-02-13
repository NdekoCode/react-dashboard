/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import StateContext from "../../libs/context/AppContext";
import { links } from "../../libs/data/dummy";

const Sidebar = () => {
  const { handleCloseSideBar } = StateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 transition-colors bg-gray-900";
  const normalLink =
    " text-gray-700 flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 transition-colors";
  return (
    <aside className=" ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          onClick={handleCloseSideBar}
          className="items-center mt-4 ml-3 flex text-slate-900 text-xl font-extrabold tracking-tighter dark:text-white"
        >
          <SiShopware className="text-3xl" />
          <button type="button">Shoppy</button>
        </Link>
        <TooltipComponent content="Menu" position="bottomCenter">
          <button
            type="button"
            onClick={handleCloseSideBar}
            className="text-xl rounded-full p-3 hover:bg=light-gray mt-4 block md:hidden"
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className="mt-5">
        {links.map((link, index) => (
          <div key={index}>
            <p className="text-gray-400 m-3 mt-4 uppercase">{link.title}</p>
            <ul>
              {link.links.map((item, key) => (
                <li key={key}>
                  <NavLink
                    to={`/${item.name}`}
                    onClick={handleCloseSideBar}
                    className={(nav) =>
                      nav.isActive ? activeLink : normalLink
                    }
                  >
                    {item.icon}
                    <span className="capitalize">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
