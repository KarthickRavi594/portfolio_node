const express = require('express');
const { getAllUsers } = require('../db/user');
const router = express.Router();

// Define a sample route
router.get('/users', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }

});

router.get("/healthz", async (_req, res) => {
  try {
    const db = await connectDB();
    await db.command({ ping: 1 });
    res.send("ok");
  } catch (e) {
    res.status(500).send("db down");
  }
});

// Define additional routes here
router.get('/about', (req, res) => {
    res.send('This is the about page.');
});

module.exports = router;