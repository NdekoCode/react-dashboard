import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import {
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../libs/data/dummy";

const Stacked = ({ width, height }) => {
  return (
    <div>
      <ChartComponent
        width={width}
        height={height}
        id="stark chart"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
      >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      </ChartComponent>
    </div>
  );
};

export default Stacked;
