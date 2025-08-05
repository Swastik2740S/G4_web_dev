require('dotenv').config();
const express = require('express');
const app = express();
const mongo = require('./db/connectdb');
const registerUser = require('./routes/userroute');

app.use(express.json());

const PORT = process.env.PORT;

// Use the router correctly
app.use("/api", registerUser);

// Default route
app.use("/", (req, res) => {
    res.send("Backend running");
});

// Connect to DB
mongo();

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
