import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Filter,
  GridComponent,
  Inject,
  Page,
  Search,
  Selection,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { Header } from "../../components/components";
import { customersData, customersGrid } from "../../libs/data/dummy";

function Customers() {
  return (
    <div className="FadeAp m-2 p-2 md:p-10 md:m-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        allowPaging
        allowSorting
        dataSource={customersData}
        toolbar={["Search", "Delete", "Edit"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((custom, index) => (
            <ColumnDirective key={index} {...custom} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Edit, Search, Filter, Sort, Selection, Toolbar]}
        />
      </GridComponent>
    </div>
  );
}

export default Customers;
