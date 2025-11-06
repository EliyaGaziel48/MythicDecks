const express = require('express');
const router = express.Router();

// Game related routes placeholder
router.get('/status', (req, res) => {
    res.json({ message: 'Game status endpoint' });
});

module.exports = router; 