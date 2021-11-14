const Music = require('../models/music');

const getSongs =async (req, res, next) => {
  // res.send("This is the list of songs");
  let song =[];

  try{

    song = await Music.find({});
  }catch(err){
    console.log(err);
    return res.send(err);
  }

  res.send({song});
};

const getSongById =async (req, res, next) => {
  const {id} =req.params;

  if(!id){
    return res.send("please Enter a valid id");
  }
  // res.send("This is the list of songs");
  let song =[];

  try{

    song = await Music.findById(id);
  }catch(err){
    console.log(err);
    return res.send(err);
  }

  res.send({song});
};

const addSong=async (req,res,next) =>{
  const body =req.body;

  let newSong = new Music({
    name: body.name,
    song:body.song,
    date:body.date,
    album:body.album,
    singers:body.singers,
  });

  try{

    await newSong.save();
  }catch(err){
    console.log(err);
    return res.send(err);
  }
  res.send({song: newSong})
}

const uploadSong=(req,res,next) => {
  const filePath = req.file.path;

  res.send({
    path: filePath,
  });
}

const updateSong =async (req, res, next) => {
  const {id} =req.params;

  if(!id){
    return res.send("please Enter a valid id");
  }
  // res.send("This is the list of songs");
  // let song =[];

  // try{

  //   song = await Music.findById(id);
  // }catch(err){
  //   console.log(err);
  //   return res.send(err);
  // }

  // if (!song){
  //   return res.send('No such song in the database');
  // }

  const updatedSong ={
    name: body.name,
    song:body.song,
    date:body.date,
    album:body.album,
    singers:body.singers,
  };
  let newSong;

  try{
    newSong = await Music.findByIdAndUpdate(id,updateSong,{new:true});
  }catch(err){
    console.log(err);
    return res.send(err);
  }
  
  res.send({song: newSong});
};

const deleteSong = async(req,res,next) =>{
  const {id} = req.params;

  if(!id){
    return res.send("please Enter a valid id");
  }

  try{
    await Music.findOneAndDelete(id);
  }catch(err){
    console.log(err);
    return res.send(err);
  }
  res.send({message:'Delete successfully!!!'});
}

module.exports = { getSongs,addSong,getSongById,uploadSong,updateSong,deleteSong};

