/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
