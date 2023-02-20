import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import StateContext from "../../libs/context/AppContext";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../libs/data/dummy";

const LineChart = () => {
  const { currentMode } = StateContext();
  return (
    <div>
      <ChartComponent
        id="line-chart"
        height="450px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{
          border: {
            width: 0,
          },
        }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
      >
        <Inject services={[LineSeries, Legend, DateTime, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
