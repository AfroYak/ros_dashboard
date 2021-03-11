const router = require("express").Router();

const exec = require("child_process").exec;

router.get("/", (req, res) => {
  let proc = exec(
    `roslaunch auto_custom mapping.launch`,
    (error, stdout, stderr) => {
      console.log("started remote_robot exec");
      console.log(`process id = ${proc.id}`);
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
});

module.exports = router;
