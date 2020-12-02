
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

function loadXMLDoc( action)
        {
            var xmlhttp;
            if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp=new XMLHttpRequest();
            }
            else
            {// code for IE6, IE5
                xmlhttp=new window.ActiveXObject("Microsoft.XMLHTTP");
            }
            var send_action = "";

            //UV On
            if(action == 1)send_action="/robo/robo.php?test=@uv_accese";
            console.log("Received");
            //UV Off
            if(action == 2)send_action="/robo/robo.php?test=@uv_spente";
            //Braccio Init Pos
            if(action == 3)send_action="/robo/robo.php?test=@braccio_pos_init";
            //Braccio High Pos
            if(action == 4)send_action="/robo/robo.php?test=@braccio_alto";
            //Braccio Medium Pos
            if(action == 5)send_action="/robo/robo.php?test=@braccio_medio";
            //Braccio Low Pos
            if(action == 6)send_action="/robo/robo.php?test=@braccio_basso";
            //Braccio Spray Act
            if(action == 7)send_action="/robo/robo.php?test=@spruzzo";
            //Pompa On
            if(action == 8)send_action="/robo/robo.php?test=@pompa_on";
            //Pompa Off
            if(action == 9)send_action="/robo/robo.php?test=@pompa_off";
            //RBG On
            if(action == 10)send_action="/robo/robo.php?test=@luci_rbg_accese";
            //RBG Off
            if(action == 11)send_action="/robo/robo.php?test=@luci_rbg_spente";
            //Sequenza Test
            if(action == 12)send_action="/robo/robo.php?test=@test";
            //Sequenza 1
            if(action == 13)send_action="/robo/robo.php?test=@sequenza1";
            //Camera UV Check
            if(action == 14)send_action="/robo/robo.php?test=@cam_uv";
            //Camera High
            if(action == 15)send_action="/robo/robo.php?test=@cam_alta";
            //Camera Medium
            if(action == 16)send_action="/robo/robo.php?test=@cam_media";
            //Camera Low
            if(action == 17)send_action="/robo/robo.php?test=@cam_bassa";
            //Spegni tutto (un abort)
            if(action == 18)send_action="/robo/robo.php?test=@detachmotor";
            //RBG Selector (usa come ElementId: rbgSelector)
            if(action == 19)send_action="/robo/robo.php?test=" + document.getElementById("rbgSelector").value;
            //Sintetizzatore Vocale (usa come ElementId: specchTextBox)
            if(action == 20)send_action="/robo/robo.php?test=@%23commandclass:roboleo.BaseSyntSpeech:" + document.getElementById("specchTextBox").value;
            //Invio stringa program page (usa come ElementID: programString)
            if(action == 21)send_action="/robo/robo.php?test=" + document.getElementById("programString").value;
            //Activate Controls
            if(action == 22)send_action="/robo/robo.php?test=@attivacontrolli";
            //Deactivate Controls
            if(action == 23)send_action="/robo/robo.php?test=@disattivacontrolli";
			//attach motor
			if(action == 24)send_action="/robo/robo.php?test=@attivamotori";
            //detach  motor
            if(action == 25)send_action="/robo/robo.php?test=@detachmotor";
			//attiva seriuale
			if(action == 26)send_action="/robo/robo.php?test=@startallserial";
            //disattiva seriale
            if(action == 27)send_action="/robo/robo.php?test=@stopallserial";
            //alert(send_action);
            xmlhttp.open("GET",send_action,true);
            xmlhttp.send();
        }

function testClick(param){
    console.log("clicked" + param);
    console.log(this.color);
    this.color = "secondary";
}

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
                        <CardText>NOT RESPONDING</CardText>
                        <Progress color="danger" value="100"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Water Level</CardTitle>
                        <CardText id="WL">76</CardText>
                        <Progress id="WLval" value={document.getElementById("#WL").innerHTML}></Progress>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Time of Flight</CardTitle>
                        <CardText>22 cm</CardText>
                        <Progress value="70"></Progress>
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
                        <label className="switch">
                            <input type="checkbox" value="0" onChange={(event) => {
                                if(this.value == "1"){
                                    this.value = "0";
                                    loadXMLDoc(2);
                                    console.log("off");
                                }else{
                                    this.value = "1";
                                    loadXMLDoc(1);
                                    console.log("on");
                                }
                            }}></input>
                            <span className="slider round"></span>
                        </label>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Pump</CardTitle>
                        <CardText>On</CardText>
                        <label className="switch">
                            <input type="checkbox" value="0" onChange={(event) => {
                                if(this.value == "1"){
                                    this.value = "0";
                                    loadXMLDoc(9);
                                    console.log("off");
                                }else{
                                    this.value = "1";
                                    loadXMLDoc(8);
                                    console.log("on");
                                }
                            }}></input>
                            <span className="slider round"></span>
                        </label>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>RGB</CardTitle>
                        <CardText>Off</CardText>
                        <label className="switch">
                            <input type="checkbox" value="0" onChange={(event) => {
                                if(this.value == "1"){
                                    this.value = "0";
                                    loadXMLDoc(11);
                                    console.log("off");
                                }else{
                                    this.value = "1";
                                    loadXMLDoc(10);
                                    console.log("on");
                                }
                            }}></input>
                            <span className="slider round"></span>
                        </label>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Controls</CardTitle>
                        <CardText>Inactive</CardText>
                        <label className="switch">
                            <input type="checkbox" value="0" onChange={(event) => {
                                if(this.value == "1"){
                                    this.value = "0";
                                    loadXMLDoc(23);
                                    console.log("off");
                                }else{
                                    this.value = "1";
                                    loadXMLDoc(22);
                                    console.log("on");
                                }
                            }}></input>
                            <span className="slider round"></span>
                        </label>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Motor</CardTitle>
                        <CardText>Detached</CardText>
                        <label className="switch">
                            <input type="checkbox" value="0" onChange={(event) => {
                                if(this.value == "1"){
                                    this.value = "0";
                                    loadXMLDoc(25);
                                    console.log("off");
                                }else{
                                    this.value = "1";
                                    loadXMLDoc(24);
                                    console.log("on");
                                }
                            }}></input>
                            <span className="slider round"></span>
                        </label>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Serial</CardTitle>
                        <CardText>Inactive</CardText>
                        <label className="switch">
                            <input type="checkbox" value="0" onChange={(event) => {
                                if(this.value == "1"){
                                    this.value = "0";
                                    loadXMLDoc(27);
                                    console.log("off");
                                }else{
                                    this.value = "1";
                                    loadXMLDoc(26);
                                    console.log("on");
                                }
                            }}></input>
                            <span className="slider round"></span>
                        </label>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Spray</CardTitle>
                        <CardText>Inactive</CardText>
                        <Button onClick={() => loadXMLDoc(7)} color="primary" style={{width: '100%'}}><i className="tim-icons icon-button-power" /></Button>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Cam UV</CardTitle>
                        <CardText>Checking</CardText>
                        <Button onClick={() => loadXMLDoc(14)} color="primary" style={{width: '100%'}}><i className="tim-icons icon-button-power" /></Button>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Test Seq</CardTitle>
                        <CardText>Inactive</CardText>
                        <Button onClick={() => loadXMLDoc(12)} color="primary" style={{width: '100%'}}><i className="tim-icons icon-button-power" /></Button>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Seq 1</CardTitle>
                        <CardText>Inactive</CardText>
                        <Button onClick={() => loadXMLDoc(13)} color="primary" style={{width: '100%'}}><i className="tim-icons icon-button-power" /></Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <div >
            <button onClick={() => loadXMLDoc(1)} type="button">UV On</button>
            <button onClick={() => loadXMLDoc(2)} type="button">UV Off</button>
        </div>
        </div>
      </>
    );
  }
}

export default System;
