const express = require('express');

const router = express.Router();

const{upload} =require('../utils/upload');
const { getSongs , addSong , getSongById , uploadSong , updateSong ,deleteSong} = require('../controllers/music');

router.get('/', getSongs);
router.get('/:id', getSongById);

router.post('/upload/song', upload.single('song'), uploadSong);
router.post('/add',addSong);   

router.put('/:id', updateSong);
router.put('/:id', deleteSong);

module.exports = router;
