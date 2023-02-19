import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import StateContext from "../../libs/context/AppContext";
import { themeColors } from "../../libs/data/dummy";

const ThemeSettings = () => {
  const { currentColor, setColor, setMode, currentMode, setThemeSettings } =
    StateContext();
  return (
    <div
      className="bg-half-transparent w-screen fixed nav-item top-0 right-0"
      onClick={setThemeSettings}
    >
      <div
        className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 ml-4">
          <h4 className="font-semibold text-xl">Settings</h4>
          <button
            type="button"
            className="text-2xl rounded-full p-2 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => setThemeSettings()}
            style={{ color: "rgba(153,171,180)" }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="border-t-1 border-color p-4 ml-4">
          <h5 className="font-semibold text-lg">Theme Options</h5>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              id="light"
              value="Light"
              onChange={() => {}}
              checked={true}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              id="dark"
              value="Dark"
              onChange={() => {}}
              checked={true}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>

        <div className="flex-col items-center justify-between p-4 ml-4">
          <h4 className="font-semibold text-xl">Theme colors</h4>
          <div className="flex flex-wrap gap-3">
            {themeColors.map((theme, index) => (
              <TooltipComponent
                key={index}
                content={theme.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{
                      backgroundColor: theme.color,
                    }}
                    onClick={() => {
                      setColor(theme.color);
                      console.log(
                        currentColor === theme.color,
                        currentColor,
                        theme.color
                      );
                    }}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl  text-white ${
                        currentColor === theme.color ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
