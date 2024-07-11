const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const postRoutes = require('./posts/postRoutes');

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use('/api/posts', postRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));