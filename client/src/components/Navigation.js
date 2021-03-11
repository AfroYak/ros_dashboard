import React, { useState } from "react";
import NewLocationModal from "./NewLocationModal";
import LocationList from "./LocationList";
import GotToLocationModal from "./GotToLocationModal";

const Navigation = () => {
  const [locations, setLocation] = useState("");

  const handleSubmit = ({ name, x, y, theta }) => {
    setLocation((prev) => [...prev, { name, x, y, theta }]);
  };

  return (
    <div>
      <LocationList locations={locations}></LocationList>
      <NewLocationModal onSubmit={handleSubmit}></NewLocationModal>
      <GotToLocationModal locations={locations}></GotToLocationModal>
    </div>
  );
};

export default Navigation;
