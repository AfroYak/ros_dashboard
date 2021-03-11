const express = require("express");
const bodyParser = require("body-parser");
const SaveMapRouter = require("./routes/save_map");
const InitRobotRouter = require("./routes/init_robot");
const StartMappingRouter = require("./routes/start_mapping");
const ShowSavedMapsRouter = require("./routes/show_saved_maps");
const GoToLocationRouter = require("./routes/go_to_location");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 9000;

app.use("/save_map", SaveMapRouter);
app.use("/init_robot", InitRobotRouter);
app.use("/show_saved_maps", ShowSavedMapsRouter);
app.use("/start_mapping", StartMappingRouter);
app.use("/go_to_location", GoToLocationRouter);

app.get("/test", (req, res) => {
  res.send("Welcome to the Backend");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
