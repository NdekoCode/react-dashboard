import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
