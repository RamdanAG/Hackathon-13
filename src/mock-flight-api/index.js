// mock-flight-api/index.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/getStatus', (req, res) => {
    const { flightNumber } = req.body;

    // Simulasi delay
    res.json({
        flightNumber,
        status: "DELAYED",
        delayMinutes: 45
    });
});

app.listen(3001, () => {
    console.log('Mock Flight API running on http://localhost:3001');
});
