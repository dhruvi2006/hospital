const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const Hospital = require('./Hospital');
const router = express.Router();

// Admin login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const hospital = await Hospital.findOne({ email });

  if (hospital && bcrypt.compareSync(password, hospital.password)) {
    const token = jwt.encode({ hospitalId: hospital._id }, 'secret');
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;
