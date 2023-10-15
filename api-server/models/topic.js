class Topic {
  constructor(id, name) {
    this.Id = id;
    this.Name = name;
  }
}

const topics = [
  new Topic("d30d907c-7748-4b01-be84-1d53ae8881d6", "Computer science"),
  new Topic("2963b687-edc7-473e-b154-bc3860f14823", " Human science"),
];

export default { Topic, topics };
