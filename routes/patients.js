// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const {registerpatient} = require('../controllers/patientcontroller');

router.post('/register', registerpatient);
// router.post('/login', patientController.login);
// // Additional routes for profile, delete, etc.

module.exports = router;
