import React from "react";

import { ChartsHeader, Pie as PieChart } from "../../components/components";
import { ecomPieChartData } from "../../libs/data/dummy";

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart
        id="chart-pie"
        data={ecomPieChartData}
        legendVisiblity
        height="full"
      />
    </div>
  </div>
);

export default Pie;
