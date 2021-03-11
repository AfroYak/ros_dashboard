import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { saveMap } from "../api/AxiosBackend";

const SaveMapForm = ({ onSubmit: saveLocation }) => {
  const [location, setLocation] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        saveLocation(location);
      }}>
      <Form.Group controlId="location">
        <Form.Label>Location Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Location Name (e.g.First Floor)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Save Location
      </Button>
    </Form>
  );
};

const SaveMapModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveLocation = (data) => {
    saveMap(data);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Save Map
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Save Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SaveMapForm onSubmit={saveLocation} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SaveMapModal;
