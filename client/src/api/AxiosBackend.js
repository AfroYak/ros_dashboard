import axios from "axios";

const queryBackend = () => {
  try {
    axios.get("/test").then((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.log("error");
  }
};

const saveMap = (data) => {
  var location = data.toLowerCase().replace(/ /g, "_");
  try {
    axios
      .post("/save_map", {
        location,
      })
      .then((res) => {
        console.log(res.data);
      });
  } catch (error) {
    console.log("error");
  }
};

const initRemoteRobot = () => {
  try {
    axios.get("/init_robot").then((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.log("error");
  }
};

const showSavedMaps = () => {
  try {
    axios.get("/show_saved_maps").then((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.log("error");
  }
};

const startMapping = () => {
  try {
    axios.get("/start_mapping").then((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.log("error");
  }
};

const goToLocation = (data) => {
  try {
    axios
      .post("/go_to_location", {
        data,
      })
      .then((res) => {
        console.log(res.data);
      });
  } catch (error) {
    console.log("error");
  }
};

export {
  queryBackend,
  saveMap,
  initRemoteRobot,
  showSavedMaps,
  startMapping,
  goToLocation,
};
