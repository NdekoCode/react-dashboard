import { ColumnsDirective } from "@syncfusion/ej2-react-grids";
import { ColumnDirective, KanbanComponent } from "@syncfusion/ej2-react-kanban";
import React from "react";
import { Header } from "../../components/components";
import { kanbanGrid } from "../../libs/data/dummy";

function Kanban() {
  return (
    <div className="FadeAp FadeAp m-2 p-2 md:m-10 md:p-10 mt-20 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent>
        <ColumnsDirective>
          {kanbanGrid.map((kanbanItem, index) => (
            <ColumnDirective key={index} {...kanbanItem} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
}

export default Kanban;
