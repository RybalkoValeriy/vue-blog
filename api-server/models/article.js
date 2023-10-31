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
    "e7767843-ecf3-4ea2-a0f2-9f50862c3489", // id
    "d30d907c-7748-4b01-be84-1d53ae8881d6", // computer science
    "c35a2ccd-40c7-4681-9537-c2c541146405", // alex
    "What is it a Linked list",
    "<h1>Linked list</h1><body>Some body text</body>"
  ),
  new Article(
    "a604b518-c114-437f-badb-29e8d36ebcec", // id
    "d30d907c-7748-4b01-be84-1d53ae8881d6", // computer science
    "c35a2ccd-40c7-4681-9537-c2c541146405", // alex
    "What is it a Arrays",
    "<h1>Arrays</h1><body>Some body text</body>"
  ),
  new Article(
    "608974d4-6977-49c3-b110-2d8ba3805d7d", // id
    "d30d907c-7748-4b01-be84-1d53ae8881d6", // computer science
    "c35a2ccd-40c7-4681-9537-c2c541146405", // alex
    "What is it a Dictionary",
    "<h1>Dictionary</h1><body>Some body text</body>"
  ),
  new Article(
    "437af02d-ff44-4312-aa95-09df0c5954f4", // id
    "d30d907c-7748-4b01-be84-1d53ae8881d6", // computer science
    "c35a2ccd-40c7-4681-9537-c2c541146405", // alex
    "What is it a Sorted list",
    "<h1>Sorted list</h1><body>Some body text</body>"
  ),
  new Article(
    "89be08ed-7ca1-4ee3-b685-181c65f33633", // id
    "2963b687-edc7-473e-b154-bc3860f14823", // Human science
    "c35a2ccd-40c7-4681-9537-c2c541146405", // alex
    "What is it a Sorted list",
    "<h1>Sorted list</h1><body>Some body text</body>"
  ),
];

export default { Article, articles };
