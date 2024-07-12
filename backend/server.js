const express = require('express');
const dotenv = require('dotenv');
const connectDBs = require('./db');
const postRoutes = require('./posts/postRoutes');

dotenv.config();

connectDBs().then(() => {
    const app = express();
    app.use(express.json());
    app.use('/api/posts', postRoutes)

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch((e) => {
    console.error('Failed to connect to databases:', e);
});
