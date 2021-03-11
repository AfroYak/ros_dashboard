import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { initRemoteRobot, showSavedMaps } from "../api/AxiosBackend";

const Admin = () => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <Button onClick={initRemoteRobot} style={{ width: "100%" }}>
            Initialize Robot
          </Button>
        </Col>
      </Row>
      <Row></Row>
      <Row></Row>
      <Row>
        <Col>Battery Percentage </Col>
        <Col>Disinfectant Level</Col>
        <Col>Current Location</Col>
      </Row>
    </div>
  );
};

export default Admin;
