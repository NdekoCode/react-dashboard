import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { Header } from "../../components/components";
import { employeesGrid } from "../../libs/data/dummy";

function Employees() {
  return (
    <div className="m-2 p-2 md:m-10 md:p-10 rounded-3xl bg-white">
      <Header category="Page" title="Employees" />
      <GridComponent id="gridcomp">
        <ColumnsDirective>
          {employeesGrid.map((employee, index) => (
            <ColumnDirective key={index} {...employee} />
          ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
}

export default Employees;
