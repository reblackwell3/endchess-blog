const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const postRoutes = require('./posts/routes');
const {setConnection: setPostConnection} = require('./posts/model');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.json());
app.use(cors());


connectDB();
    
app.use('/api/posts', postRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));