import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";

import { ChartsHeader } from "../../components/components";
import StateContext from "../../libs/context/AppContext";
import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../libs/data/dummy";

const ColorMapping = () => {
  const { currentMode } = StateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        category="Color Mappping"
        title="USA CLIMATE - WEATHER BY MONTH"
      />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ mode: "Range", background: "white" }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
