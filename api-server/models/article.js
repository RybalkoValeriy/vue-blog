class Article {
  constructor(id, topicId, authorId, name, body) {
    this.Id = id;
    this.topicId = topicId;
    this.AuthorId = authorId;
    this.Name = name;
    this.Body = body;
  }
}

const articles = [
  new Article(
    "e7767843-ecf3-4ea2-a0f2-9f50862c3489",
    "d30d907c-7748-4b01-be84-1d53ae8881d6", // computer science
    "c35a2ccd-40c7-4681-9537-c2c541146405", // alex
    "What is it a Linked list",
    "<h1>Linked list</h1><body>Some body text</body>"
  ),
  new Article(
    "f5b0836b-2bfe-453b-8e41-12c17c3dc67c",
    "d30d907c-7748-4b01-be84-1d53ae8881d6", // computer science
    "c35a2ccd-40c7-4681-9537-c2c541146405", // alex
    "What is it a Arrays",
    "<h1>Arrays</h1><body>Some body text</body>"
  ),
  new Article(
    "f5b0836b-2bfe-453b-8e41-12c17c3dc67c",
    "d30d907c-7748-4b01-be84-1d53ae8881d6", // computer science
    "c35a2ccd-40c7-4681-9537-c2c541146405", // alex
    "What is it a Dictionary",
    "<h1>Dictionary</h1><body>Some body text</body>"
  ),
  new Article(
    "f5b0836b-2bfe-453b-8e41-12c17c3dc67c",
    "d30d907c-7748-4b01-be84-1d53ae8881d6", // computer science
    "c35a2ccd-40c7-4681-9537-c2c541146405", // alex
    "What is it a Sorted list",
    "<h1>Sorted list</h1><body>Some body text</body>"
  ),
];

export default { Article, articles };
