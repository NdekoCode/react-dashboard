import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import React, { Component } from "react";
export default class SparkLine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentColor, id, type, height, width, color, data } = this.props;
    return (
      <div>
        <SparklineComponent
          id={id}
          height={height}
          width={width}
          lineWidth={1}
          valueType="Numeric"
          fill={color}
          border={{ color: currentColor, width: 2 }}
          dataSource={data}
          xName="x"
          yName="yval"
          type={type}
          tooltipSettings={{
            visible: true,
            format: "${x} data ${yval}",
            trackLineSettings: {
              visible: true,
            },
          }}
        >
          <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
      </div>
    );
  }
}
