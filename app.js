const express = require("express");
const userRouter = require("./src/user/user.route");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chapter6 - challenge by Muhammad Arif Setiawan - FSW 23");
});

app.use(userRouter);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
