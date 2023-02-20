import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../libs/data/dummy";

import { Header } from "../../components/components";
import StateContext from "../../libs/context/AppContext";

const Area = () => {
  const { currentMode } = StateContext();
  return (
    <div className="FadeAp m-4 mt-34 dark:bg-secondary-dark-bg dark:text-gray-400 md:m-10 p-10 rounded-3xl bg-white">
      <Header category="Chart" title="Inflation Rate in Percentage    " />
      <ChartComponent
        id="area-chart"
        height="450px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{
          border: {
            width: 0,
          },
        }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
      >
        <Inject services={[SplineAreaSeries, Legend, DateTime]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
