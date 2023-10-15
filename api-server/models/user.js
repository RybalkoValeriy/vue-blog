class User {
  constructor(id, name, password) {
    this.Id = id;
    this.name = name;
    this.password = password;
  }
}

const users = [
  new User("c35a2ccd-40c7-4681-9537-c2c541146405", "Alex", "passw0rd"),
  new User("856b0acc-edd4-45e4-bcde-26eb31afebe0", "Bob", "passw0rd"),
];

export default { User, users };
