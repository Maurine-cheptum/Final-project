// controllers/patientController.js
const Patient = require('../models/Patient');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newPatient = await Patient.create({
      ...req.body,
      password_hash: hashedPassword,
    });
    res.status(201).json({ message: 'Patient registered successfully', newPatient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
