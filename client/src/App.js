import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Admin from "./components/Admin";
import Mapping from "./components/Mapping";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <h1>Rosbot Admin Panel</h1>
      <Tabs defaultActiveKey="admin" transition={false}>
        <Tab eventKey="admin" title="Admin">
          <Admin></Admin>
        </Tab>
        <Tab eventKey="mapping" title="Mapping">
          <Mapping></Mapping>
        </Tab>
        <Tab eventKey="navigation" title="Navigation">
          <Navigation></Navigation>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
