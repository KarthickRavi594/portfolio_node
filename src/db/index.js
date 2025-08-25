// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://karthickravi594:cLuOdFgEXOi7Zg7L@portfolio-cluster.iuczzpy.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-cluster";

// const client = new MongoClient(uri, { tlsAllowInvalidCertificates: true });

// async function connectDB() {
//     console.log('Connecting to MongoDB...');
//   if (!client.topology?.isConnected()) {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   }
//   return client.db('portfolio');
// }

// module.exports = { connectDB };

// db.js
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://karthickravi594:cLuOdFgEXOi7Zg7L@portfolio-cluster.iuczzpy.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-cluster";
const dbName = process.env.MONGODB_DB || "portfolio";

// Reuse a single client across hot reloads / server restarts
let client;
let clientPromise;

if (!uri) {
  throw new Error("Missing MONGODB_URI env var");
}

function getClient() {
  if (!clientPromise) {
    client = new MongoClient(uri, {
      // For Atlas, do NOT set tlsAllowInvalidCertificates or custom CA.
      serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
      serverSelectionTimeoutMS: 10000,
    });
    clientPromise = client.connect()
      .then(async (c) => {
        await c.db(dbName).command({ ping: 1 });
        console.log("✅ MongoDB connected & ping ok");
        return c;
      })
      .catch((err) => {
        console.error("❌ Mongo connect failed:", err);
        throw err;
      });
  }
  return clientPromise;
}

async function connectDB() {
  const c = await getClient();
  return c.db(dbName);
}

module.exports = { connectDB };
