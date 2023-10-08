class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

const users = [new User("Alex", "passw0rd"), new User("Bob", "passw0rd")];

export default { User, users };
