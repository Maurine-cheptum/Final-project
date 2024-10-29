const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patients');
const doctorRoutes = require('./routes/doctors');
const appointmentRoutes = require('./routes/appointments');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    session({
        secret: 'telemedicine_secret',
        resave: false,
        saveUninitialized: false,
    })
);

app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});