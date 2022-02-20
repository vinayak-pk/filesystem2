const express = require('express');
const app = express();
const path = require('path');

const connect = require('./config/db');
const userController = require('./controllers/user.controller');
const port = 8000;
const fileController = require('./controllers/file.controller');
const folderController =  require('./controllers/folder.controller');
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'files')))
app.use('/user',userController);
app.use('/files',fileController);
app.use('/files',folderController);
app.listen(process.env.port||port,()=>{
    connect();
    console.log(`Listening to ${port}`)
})