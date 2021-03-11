const router = require("express").Router();

const exec = require("child_process").exec;

router.post("/", async (req, res) => {
  const location = req.body.data;
  console.log(location);
  let msg = `rostopic pub -1 /send_goal geometry_msgs/Pose2D "x: ${parseFloat(
    location.x
  )}
y: ${parseFloat(location.y)}
theta: ${parseFloat(location.theta)}"`;

  console.log(msg);

  let proc = await exec(msg, (error, stdout, stderr) => {
    console.log("started go to location exec");
    if (error) {
      console.log(`error: ${error.message}`);
      console.log(`process id = ${proc.id}`);
      res.send("error");
    }
    if (stderr) {
      res.send(`stderr: ${stderr}`);
    }
    res.send(`stdout: ${stdout}`);
  });
});

module.exports = router;
