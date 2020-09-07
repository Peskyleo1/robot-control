
import Dashboard from "views/Dashboard.js";
import System from "views/System.js";
import Logs from "views/Logs.js";
var routes = [
  {
    path: "/dashboard",
    name: "Control",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-controller",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/system",
    name: "System",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-sound-wave",
    component: System,
    layout: "/admin"
  },
  {
    path: "/logs",
    name: "Logs",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-bullet-list-67",
    component: Logs,
    layout: "/admin"
  },
];
export default routes;
