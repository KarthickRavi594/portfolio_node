const { connectDB } = require('./index');

async function getAllUsers() {
  const db = await connectDB();
  return db.collection('user').find().toArray();
}

module.exports = { getAllUsers };