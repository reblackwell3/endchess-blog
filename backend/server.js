const express = require('express');
const dotenv = require('dotenv');
const connectDBs = require('./db');
const postRoutes = require('./posts/routes');
const projectRoutes = require('./projects/routes');
const {setConnection: setPostConnection} = require('./posts/model');
const {setConnection: setProjectConnection} = require('./projects/model');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDBs().then(({ blogDBConnection, projectDBConnection }) => {
    setPostConnection(blogDBConnection);
    setProjectConnection(projectDBConnection);
    
    app.use(express.json());
    app.use('/api/posts', postRoutes);
    app.use('/api/projects', projectRoutes);


    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});