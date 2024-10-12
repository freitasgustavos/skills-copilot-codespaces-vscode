// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comment
app.post('/comments', (req, res) => {
    const { comment } = req.body;
    console.log(`Comment: ${comment}`);
    res.json({ message: 'Comment created' });
});

// Start web server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});