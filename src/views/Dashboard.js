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
                  <CardTitle>Camera Controls</CardTitle>
                  <Row>
                    <Col>
                    <Button onClick={() => loadXMLDoc(1)} color="primary" style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-light-3" /> On</Button>
                    </Col>
                    <Col>
                      <Button onClick={() => loadXMLDoc(15)} style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-minimal-up" /></Button>
                    </Col>
                    <Col>
                    <Button onClick={() => loadXMLDoc(2)} color="primary" style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-light-3" /> Off</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Button style={{width: '100%', height: '100px', padding: '0'}} disabled><i className="tim-icons icon-simple-remove" /></Button>
                    </Col>
                    <Col>
                    <Button onClick={() => loadXMLDoc(16)} style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-simple-delete" /></Button>
                    </Col>
                    <Col>
                    <Button style={{width: '100%', height: '100px', padding: '0'}} disabled><i className="tim-icons icon-simple-remove" /></Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Button onClick={() => loadXMLDoc(14)} color="primary" style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-check-2" /> UV Check</Button>
                    </Col>
                    <Col>
                    <Button onClick={() => loadXMLDoc(17)} style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-minimal-down" /></Button>
                    </Col>
                    <Col>
                    <Button color="primary" style={{width: '100%', height: '100px', padding: '0'}} disabled><i className="tim-icons icon-simple-remove" /></Button>
                    </Col>
                  </Row>
              </CardBody>
          </Card>
          <Card>
              <CardBody>
                  <CardTitle>Motor Controls</CardTitle>
                  <Row>
                    <Col>
                    <Button color="primary" style={{width: '100%', height: '100px', padding: '0'}} disabled><i className="tim-icons icon-simple-remove" /></Button>
                    </Col>
                    <Col>
                      <Button onClick={() => loadXMLDoc(4)} style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-minimal-up" /></Button>
                    </Col>
                    <Col>
                    <Button color="primary" style={{width: '100%', height: '100px', padding: '0'}} disabled><i className="tim-icons icon-simple-remove" /></Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Button style={{width: '100%', height: '100px', padding: '0'}} disabled><i className="tim-icons icon-simple-remove" /></Button>
                    </Col>
                    <Col>
                    <Button onClick={() => loadXMLDoc(5)} style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-simple-delete" /></Button>
                    </Col>
                    <Col>
                    <Button style={{width: '100%', height: '100px', padding: '0'}} disabled><i className="tim-icons icon-simple-remove" /></Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Button onClick={() => loadXMLDoc(7)} color="primary" style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-triangle-right-17" /> Spray</Button>
                    </Col>
                    <Col>
                    <Button onClick={() => loadXMLDoc(6)} style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-minimal-down" /></Button>
                    </Col>
                    <Col>
                    <Button onClick={() => loadXMLDoc(3)} color="primary" style={{width: '100%', height: '100px', padding: '0'}}><i className="tim-icons icon-shape-star" /> Initial Position</Button>
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
