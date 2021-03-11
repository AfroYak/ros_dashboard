const router = require("express").Router();

const { exec } = require("child_process");
const { stdout } = require("process");

router.get("/", (req, res) => {
  // prettier-ignore
  exec(
    'ls *.yaml',
    { cwd: "/home/rosmaster/catkin_ws/src/auto_custom/maps" },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      console.log(`stdout:\n${stdout}`);
      res.send(stdout);
    }
  );
});

module.exports = router;

// 'cd /home/rosmaster/catkin_ws/src/auto_custom/maps && ls *.yaml | sed -e "s/\..*$//"';
