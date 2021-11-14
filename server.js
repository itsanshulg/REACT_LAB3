const express = require('express');
const cors = require('cors');
const mongoose =require('mongoose')
// const multer =require('multer')
const app = express();
// const form = multer();

const musicRoutes = require('./routes/music');


const port = process.env.PORT||9000;
const MongoDbUrl= 'mongodb+srv://admin:admin123@music.dvief.mongodb.net/musicnew?retryWrites=true&w=majority'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(form.array());
app.use(cors());
app.use('/api/music', musicRoutes);

mongoose.connect(MongoDbUrl,() =>{
  app.listen(port,() =>{
    console.log(`server running on http://localhost:${port}`)
  })
},{useNewUrlParser:true});