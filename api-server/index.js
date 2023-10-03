const express = require("express");
const bodyParser = require("body-parser");
const { users } = require("./models/user");

const app = express();
app.use(bodyParser.json());

app.get("/api/articles", (req, res) =>
  res.send([
    {
      title: "title1",
      description: "description1",
    },
    {
      title: "title2",
      description: "description2",
    },
    {
      title: "title3",
      description: "description3",
    },
  ])
);

app.post("/api/login", (req, res) => {
  const user = req.body;
  if (user.name && user.password) {
    const userFromDb = users.find(
      (u) => u.name === user.name && u.password === user.password
    );
    if (userFromDb) {
      res.status(200).send({
        user: {
          name: userFromDb.name,
          password: userFromDb.password,
        },
      });
    }
  }
  res.status(401).send("Invalid login");
});

app.listen(8099, () => console.log("the api server listening 8099"));
