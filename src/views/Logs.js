
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";

class Logs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return ( 
      <>
        <div className="content">
        <Table responsive>
        <thead>
            <tr>
                <th className="text-center">TimeStamp</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="text-center">11:22:33</td>
                <td>Event</td>
                <td>Camera moved 90°</td>
            </tr>
            <tr className="table-danger">
                <td className="text-center">11:21:39</td>
                <td className="errorzsx" color="#fff">ERROR</td>
                <td>Humidity sensor not responding</td>
            </tr>
            <tr>
                <td className="text-center">10:12:46</td>
                <td>Event</td>
                <td>Camera initialized</td>
            </tr>
            <tr>
                <td className="text-center">10:11:58</td>
                <td>Event</td>
                <td>Initializing Camera</td>
            </tr>
            <tr>
                <td className="text-center">10:11:46</td>
                <td>Event</td>
                <td>System booted up correctly!</td>
            </tr>
        </tbody>
    </Table>
        </div>
      </>
    );
  }
}

export default Logs;
