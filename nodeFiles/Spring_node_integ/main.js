const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors()); // Enable CORS for all routes
app.get('/springNodeTest', (req, res) => {
    // Perform necessary operations
    res.send('Response from Node.js');
});

app.listen(3000, () => {
    console.log('Node.js server is running on port 3000');
});
