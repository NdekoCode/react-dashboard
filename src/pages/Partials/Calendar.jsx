import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import React from "react";
function Calendar() {
  return (
    <div className="m-2 p-2 md:m-10 md:p-10 mt-20 bg-white rounded-3xl">
      <ScheduleComponent>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
}

export default Calendar;
