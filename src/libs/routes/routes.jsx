import React from "react";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from "../../pages/pages";

const routes = [
  // Dashboard
  {
    name: "e-commerce",
    path: "/",
    component: <Ecommerce />,
  },
  {
    name: "",
    path: "/ecommerce",
    component: <Ecommerce />,
  },
  // Pages
  {
    name: "pages",
    path: "/orders",
    component: <Orders />,
  },
  {
    name: "Employees",
    path: "/employees",
    component: <Employees />,
  },
  {
    name: "Customers",
    path: "/customers",
    component: <Customers />,
  },
  //   Apps
  {
    name: "Kanban",
    path: "/kanban",
    component: <Kanban />,
  },
  {
    name: "Editor",
    path: "/editor",
    component: <Editor />,
  },
  {
    name: "Calendar",
    path: "/calendar",
    component: <Calendar />,
  },
  {
    name: "Color",
    path: "/color-picker",
    component: <ColorPicker />,
  },
  //   Charts
  {
    name: "Line",
    path: "/line",
    component: <Line />,
  },
  {
    name: "Area",
    path: "/area",
    component: <Area />,
  },
  {
    name: "Bar",
    path: "/bar",
    component: <Bar />,
  },
  {
    name: "Pie",
    path: "/pie",
    component: <Pie />,
  },
  {
    name: "Financial",
    path: "/financial",
    component: <Financial />,
  },
  {
    name: "ColorMapping",
    path: "/color-mapping",
    component: <ColorMapping />,
  },
  {
    name: "Pyramid",
    path: "/pyramid",
    component: <Pyramid />,
  },
  {
    name: "Stacked",
    path: "/stacked",
    component: <Stacked />,
  },
];
export default routes;
