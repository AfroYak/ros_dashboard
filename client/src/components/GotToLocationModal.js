import React, { useState } from "react";
import { Button, Form, Modal, Col } from "react-bootstrap";
import { goToLocation } from "../api/AxiosBackend";

const SaveMapForm = ({ handleClose, locations }) => {
  const [selectedOption, setSelectedOption] = useState(locations[0].name);

  const handleSubmit = () => {
    let location = locations.find((x) => x.name === selectedOption);
    goToLocation(location);
    handleClose();
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Locations</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => setSelectedOption(e.target.value)}>
          {locations &&
            locations.map((location, id) => (
              <option key={id} value={location.name}>
                {location.name}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Go To Location
      </Button>
    </Form>
  );
};

const SaveMapModal = ({ locations }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Go To Location
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Go To Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SaveMapForm handleClose={handleClose} locations={locations} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SaveMapModal;
