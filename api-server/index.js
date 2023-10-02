const express = require("express");
const bodyParser = require("body-parser");

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

app.listen(8099, () => console.log("the api server listening 8099"));
