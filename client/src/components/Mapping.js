import React, { useState } from "react";
import MapCanvas from "./MapCanvas";
import SaveMapModal from "./SaveMapModal";
import { Button, Container, Row, Col } from "react-bootstrap";
import { startMapping, showSavedMaps } from "../api/AxiosBackend";

const Mapping = () => {
  return (
    <div>
      <Row>
        <Col lg={12}>
          <SaveMapModal />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Button onClick={startMapping}>Start Mapping</Button>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Button onClick={showSavedMaps}>Show Saved Maps</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Mapping;
