// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientcontroller');

router.post('/register', patientController.register);
router.post('/login', patientController.login);
// Additional routes for profile, delete, etc.

module.exports = router;
