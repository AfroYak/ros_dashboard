import React, { useState } from "react";
import { Button, Form, Modal, Col } from "react-bootstrap";

const SaveLocationForm = ({ onSubmit: saveLocation }) => {
  const [location, setLocation] = useState("");
  const [xPos, setXPos] = useState("");
  const [yPos, setYPos] = useState("");
  const [theta, setTheta] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        saveLocation({ name: location, x: xPos, y: yPos, theta });
      }}>
      <Form.Group controlId="location">
        <Form.Label>Location Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Location Name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="xPos">
          <Form.Label>X Position</Form.Label>
          <Form.Control
            type="number"
            value={xPos}
            onChange={(e) => setXPos(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="yPos">
          <Form.Label>Y Position</Form.Label>
          <Form.Control
            type="number"
            value={yPos}
            onChange={(e) => setYPos(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="thetaPos">
          <Form.Label>Theta Angle</Form.Label>
          <Form.Control
            type="number"
            value={theta}
            onChange={(e) => setTheta(e.target.value)}
          />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit" block>
        Save Location
      </Button>
    </Form>
  );
};

const NewLocationModal = ({ onSubmit: handleSubmit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveLocation = (data) => {
    handleSubmit(data);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Location
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SaveLocationForm onSubmit={saveLocation} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewLocationModal;
