import React from "react";
import { Table } from "react-bootstrap";

const LocationList = ({ locations }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Location Name</th>
            <th>X Position</th>
            <th>Y Position</th>
            <th>Theta</th>
          </tr>
        </thead>
        <tbody>
          {locations &&
            locations.map(({ name, x, y, theta }, id) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{x}</td>
                <td>{y}</td>
                <td>{theta}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LocationList;
