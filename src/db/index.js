const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://karthickravi594:cLuOdFgEXOi7Zg7L@portfolio-cluster.iuczzpy.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-cluster";

const client = new MongoClient(uri, { tlsAllowInvalidCertificates: true });

async function connectDB() {
    console.log('Connecting to MongoDB...');
  if (!client.topology?.isConnected()) {
    await client.connect();
    console.log('Connected to MongoDB');
  }
  return client.db('portfolio');
}

module.exports = { connectDB };