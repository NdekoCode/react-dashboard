import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components/components";
import StateContext from "./libs/context/AppContext";
import { UserStateContextProvider } from "./libs/context/UserInteractionContext";
import routes from "./libs/routes/routes";

function App() {
  const { activeMenu } = StateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settng" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl rounded-full transition-colors text-white hover:bg-light-gray"
                style={{ backgroundColor: "blue" }}
                onClick={() => {}}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="sweetX w-72 sidebar fixed dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : null}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen  w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <UserStateContextProvider>
                <Navbar />
              </UserStateContextProvider>
            </div>
          </div>
          <div>
            <Routes>
              {routes.map(({ path, component }, index) => (
                <Route key={index} path={path} element={component} />
              ))}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
