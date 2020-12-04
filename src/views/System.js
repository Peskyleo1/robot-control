
import React, {useState} from "react";
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

import dynamicData from "../data/data.json"

document.addEventListener("DOMSubtreeModified", function(event) { 
    //Wait for document to be loaded
    //console.log("changes");
    passValue();
});

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


//********** TESTING ***********/


function testClick(param){
    console.log("click");
    document.addEventListener("DOMContentLoaded", function(event) { 
        //Wait for document to be loaded
    });
    if(document.getElementById("WL")) {
        console.log("WL exists");
        document.getElementById("WL").innerHTML = param;
    } else {
        console.log("WL does not exist");
    }
    
    
}




//ProgressBar Gets value itself from innerHtml
function getValue(param){
    document.addEventListener("DOMSubtreeModified", function(event) { 
        //Wait for document to be loaded
        //console.log("changes");
        
    });
    return dynamicData.ozone;
}

//Passes value to progressbar
function passValue(param){
    document.addEventListener("DOMContentLoaded", function(event) { 
        //Wait for document to be loaded
        
    });
    if(document.getElementById("wl-val")) {
        console.log("WLval exists");
        dynamicData.temperature = parseFloat(document.getElementById("temp").innerHTML) + 20;
        dynamicData.flow = parseFloat(document.getElementById("flow").innerHTML) + 0;
        dynamicData.humidity = parseFloat(document.getElementById("hum").innerHTML);
        dynamicData.waterLevel = parseFloat(document.getElementById("WL").innerHTML) * 20;
        dynamicData.timeOfFlight = parseFloat(document.getElementById("ToF").innerHTML) + 0;
        dynamicData.amps = parseFloat(document.getElementById("current").innerHTML) + 0;
        dynamicData.ping = parseFloat(document.getElementById("ping").innerHTML) + 0;
        dynamicData.ozone = parseFloat(document.getElementById("oz").innerHTML) + 0;
        dynamicData.lux = parseFloat(document.getElementById("lux").innerHTML) + 0;
        dynamicData.fc1 = parseFloat(document.getElementById("switch1").innerHTML) + 0;
        dynamicData.fc2 = parseFloat(document.getElementById("switch2").innerHTML) + 0;

        document.getElementById("temp-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.temperature + "%");
        document.getElementById("flow-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.flow + "%");
        document.getElementById("hum-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.humidity + "%");
        document.getElementById("wl-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.waterLevel + "%");
        document.getElementById("tof-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.timeOfFlight + "%");
        document.getElementById("amps-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.amps + "%");
        document.getElementById("ping-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.ping + "%");
        document.getElementById("oz-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.ozone + "%");
        document.getElementById("lux-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.lux + "%");
        document.getElementById("sw1-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.fc1 + "%");
        document.getElementById("sw2-val").querySelector(".progress-bar").setAttribute("style", "width: " + dynamicData.fc2 + "%");
        document.getElementById("empty-val").querySelector(".progress-bar").setAttribute("style", "width: " + "100" + "%");
        //console.log(document.getElementById("WLval").querySelector(".progress-bar").getAttribute("aria-valuenow"));
    } else {
        console.log("WLval does not exist");
        return "1";
    }
}

//*********************/

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
    let data = dynamicData;
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
                        <CardText id="temp">22°C</CardText>
                        <Progress id="temp-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Flow</CardTitle>
                        <CardText id="flow">0.2 L/min</CardText>
                        <Progress id="flow-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Humidity</CardTitle>
                        <CardText id="hum">NOT RESPONDING</CardText>
                        <Progress id="hum-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Water Level</CardTitle>
                        <CardText id="WL" onChange={() => console.log("change")}>76</CardText>
                        <Progress id="wl-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Time of Flight</CardTitle>
                        <CardText id="ToF">22 cm</CardText>
                        <Progress id="tof-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Current</CardTitle>
                        <CardText id="current">0.2 Amps</CardText>
                        <Progress id="amps-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Ping</CardTitle>
                        <CardText id="ping">20 ms</CardText>
                        <Progress id="ping-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Ozone</CardTitle>
                        <CardText id="oz" onChange={passValue}>289 DU</CardText>
                        <Progress id="oz-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Light</CardTitle>
                        <CardText id="lux">22 cm</CardText>
                        <Progress id="lux-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Switch1</CardTitle>
                        <CardText id="switch1">0.2 Amps</CardText>
                        <Progress id="sw1-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Switch2</CardTitle>
                        <CardText id="switch2">20 ms</CardText>
                        <Progress id="sw2-val"></Progress>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Empty</CardTitle>
                        <CardText id="Test">289 DU</CardText>
                        <Progress id="empty-val" color="danger"></Progress>
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
            </Row>
            <Row>
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
        <Row>
            <Col>
                <Card style={{width: '100%'}}>
                    <CardBody>
                        <CardTitle>Abort</CardTitle>
                        <CardText>GO</CardText>
                        <Button onClick={() => loadXMLDoc(18)} color="danger" style={{width: '100%'}}><i className="tim-icons icon-button-power" /></Button>
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
