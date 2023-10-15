import express from "express";
import bodyParser from "body-parser";
import userModule from "./models/user.js";
import articleModule from "./models/article.js";
import topicModule from "./models/topic.js";
import utilities from "./utilities/utilities.js";

const app = express();
app.use(bodyParser.json());

// ARTICLES
app.get("/api/articles", async (req, res) => {
  await utilities.mockDelay(200);
  res.status(200).send(articleModule.Article);
});

app.get("/api/articles/:articleId", async (req, res) => {
  await utilities.mockDelay(200);

  res
    .status(200)
    .send(
      articleModule.articles.find((x) => x.AuthorId === req.params.articleId)
    );
});

app.get("/app/articles/:userId", async (req, res) => {
  await utilities.mockDelay(200);
  res
    .status(200)
    .send(
      articleModule.articles.filter((a) => a.AuthorId === req.params.userId)
    );
});

// TOPICS
app.get("/api/topics", async (req, res) => {
  await utilities.mockDelay(200);
  res.status(200).send(topicModule.topics);
});

// LOGIN
app.post("/api/login", async (req, res) => {
  await utilities.mockDelay(400);

  const user = req.body;
  if (user.name && user.password) {
    const userFromDb = userModule.users.find(
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
  res.status(401).send({ message: "Invalid login" });
});

app.listen(8099, () => console.log("the api server listening 8099"));
