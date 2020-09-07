
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
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  Progress,
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

class System extends React.Component {
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
        <Row>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>CPU</CardTitle>
                        <CardText>67%</CardText>
                        <Progress value="67"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Ram</CardTitle>
                        <CardText>15%</CardText>
                        <Progress value="15"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Network</CardTitle>
                        <CardText>7%</CardText>
                        <Progress value="7"></Progress>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h3>SENSOR DATA</h3>
        <Row>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Temperature</CardTitle>
                        <CardText>22°C</CardText>
                        <Progress value="33"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Flow</CardTitle>
                        <CardText>0.2 L/min</CardText>
                        <Progress value="20"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Humidity</CardTitle>
                        <CardText>50%</CardText>
                        <Progress value="50"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Water Level</CardTitle>
                        <CardText>76%</CardText>
                        <Progress value="76"></Progress>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Time of Flight</CardTitle>
                        <CardText>22 min</CardText>
                        <Progress value="0"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Current</CardTitle>
                        <CardText>0.2 Amps</CardText>
                        <Progress value="24"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Ping</CardTitle>
                        <CardText>20 ms</CardText>
                        <Progress value="20"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Ozone</CardTitle>
                        <CardText>289 DU</CardText>
                        <Progress value="20"></Progress>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h3>ONBOARD SYSTEMS</h3>
        <Row>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Light</CardTitle>
                        <CardText>On</CardText>
                        <Button color="primary" style={{width: '100%'}}><i className="tim-icons icon-button-power" /></Button>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Pump</CardTitle>
                        <CardText>On</CardText>
                        <Button color="primary" style={{width: '100%'}}><i className="tim-icons icon-button-power" /></Button>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Hook</CardTitle>
                        <CardText>Attached</CardText>
                        <Button color="primary" style={{width: '100%'}}><i className="tim-icons icon-button-power" /></Button>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Spray</CardTitle>
                        <CardText>Inactive</CardText>
                        <Button color="primary" style={{width: '100%'}}><i className="tim-icons icon-button-power" /></Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </div>
      </>
    );
  }
}

export default System;
