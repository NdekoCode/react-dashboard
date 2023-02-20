import React from "react";
import { Header, LineChart } from "../../components/components";

function Line() {
  return (
    <div className="FadeAp m-4 mt-34 dark:bg-secondary-dark-bg dark:text-gray-400 md:m-10 p-10 rounded-3xl bg-white">
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
}

export default Line;
