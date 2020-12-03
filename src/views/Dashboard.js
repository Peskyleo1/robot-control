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
  CardImg,
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  Media,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Spinner
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";

import warehouseImage from 'assets/img/warehouse.jpg';

class Dashboard extends React.Component {
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
          <Card>
              <CardImg top src="http://192.168.2.63:8080/?action=stream" alt={"Loading Video..."}></CardImg>
              <CardBody>
                  <CardTitle>Controls</CardTitle>
                  <Row>
                    <Col>
                    <Button color="primary" style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-light-3" /></Button>
                    </Col>
                    <Col>
                      <Button style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-minimal-up" /></Button>
                    </Col>
                    <Col>
                    <Button color="primary" style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-controller" /></Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Button style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-minimal-left" /></Button>
                    </Col>
                    <Col>
                    <Button style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-button-pause" /></Button>
                    </Col>
                    <Col>
                    <Button style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-minimal-right" /></Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Button color="primary" style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-video-66" /></Button>
                    </Col>
                    <Col>
                    <Button style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-minimal-down" /></Button>
                    </Col>
                    <Col>
                    <Button color="primary" style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-zoom-split" /></Button>
                    </Col>
                  </Row>
              </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default Dashboard;
