import mongoose from "mongoose";

class Database {
  private uri = "";

  constructor(user: string, password: string, database: string) {
    this.uri = `mongodb+srv://${user}:${password}@develop.7lrmtbd.mongodb.net/${database}?retryWrites=true&w=majority&appName=develop`;
  }

  async connect() {
    return await mongoose
      .connect(this.uri)
      .then(() => console.log(`Connected successfully`))
      .catch((err) => console.log(`Error`, err));
  }
}

export default Database;
