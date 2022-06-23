const express = require("express");

const app = express();

const port = 3000;

const data = require("./team.json");
app.get("/", (req, res) => {
  res.json(data);
});

// app.get("/team", (req, res) => {
//   res.send([1, 2, 3, 4]);
// });

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(data[id]);
});

app.listen(port, () => console.log(`listening on port ${port}`));

app.use((req, res) => {
  res.status(404).send("WE GOT AN ERROR");
});