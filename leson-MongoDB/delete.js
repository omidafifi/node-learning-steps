const { MongoClient, ObjectId, } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorials";
const client = new MongoClient(DB_URL);
async function main() {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db(DB_Name);
  const userCollection = db.collection("user");
  //   const result = await userCollection.deleteOne({ firstName: "omidreza" });
//   const result = await userCollection.deleteOne({
//     _id: new ObjectId("689c5c1b803c00d4313b141f"),
//   });
//   console.log("Deleted Document => ", result);
}
console.log(new ObjectId("689c5c1b803c00d4313b141f"));
main();
