const router = require("express").Router();

const exec = require("child_process").exec;

router.post("/", (req, res) => {
  const location = req.body.location;
  console.log(location);

  let proc = exec(
    `roslaunch auto_custom map_saver.launch location:=${location}`,
    (error, stdout, stderr) => {
      console.log("started map_saver exec");
      if (error) {
        console.log(`error: ${error.message}`);
        res.send("error");
      }
      if (stderr) {
        res.send(`stderr: ${stderr}`);
      }
      res.send(`stdout: ${stdout}`);
    }
  );

  console.log(`process id = ${proc.id}`);
});

module.exports = router;
