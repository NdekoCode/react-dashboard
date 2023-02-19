import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const ThemeSettings = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="flex items-center justify-between p-4 ml-4">
          <h4 className="font-bold text-lg">Settings</h4>
          <button
            type="button"
            className="text-2xl rounded-full p-2 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => {}}
            style={{ color: "rgba(153,171,180)" }}
          >
            <MdOutlineCancel />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
