const { MongoClient, ObjectId } = require("mongodb");

const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorials";
const client = new MongoClient(DB_URL);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(DB_Name);
    const userCollection = db.collection("user");

    // مثال حذف یک سند بر اساس firstName
    // const result = await userCollection.deleteOne({ firstName: "omidreza" });

    // مثال حذف یک سند بر اساس _id
    // const result = await userCollection.deleteOne({
    //   _id: new ObjectId("689c5c1b803c00d4313b141f"),
    // });

    // console.log("Deleted Document => ", result);


    console.log("Current Timestamp:", Math.floor(Date.now() / 1000));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

main();
