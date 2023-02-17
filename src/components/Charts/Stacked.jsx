import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import {
  stackedCustomSeries,
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
        chartArea={{
          border: {
            width: 0,
          },
        }}
        tooltip={{
          enable: true,
        }}
        legendSettings={{
          background: "white",
        }}
      >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Stacked;
