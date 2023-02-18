import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Search,
  Toolbar
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { Header } from "../../components/components";
import { employeesData, employeesGrid } from "../../libs/data/dummy";

function Employees() {
  return (
    <div className="FadeAp m-2 p-2 md:m-10 md:p-10 rounded-3xl bg-white">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((employee, index) => (
            <ColumnDirective key={index} {...employee} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
}

export default Employees;
