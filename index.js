
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// BEGIN: Backend Route
app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});
// END: Backend Route

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
