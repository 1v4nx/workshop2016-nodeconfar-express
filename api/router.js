import express from 'express';
import colors from 'colors/safe';


import {
    trackController,
    bandController,
    albumController
} from './controllers';


export const router = express.Router();


// API Routes
router.get('/tracks', trackController.getList);
router.get('/tracks/:id/comments', trackController.getComments);
router.post('/tracks/:id/comment', trackController.addComment);
router.get('/bands', bandController.getList);
router.get('/bands/:id', bandController.getOne);
router.get('/bands/:id/albums', bandController.getAlbumsOfBand);
router.get('/bands/:id/artists', bandController.getArtistsOfBand);

router.get('/albums/:id', albumController.getOne);
router.get('/albums/:id/tracks', albumController.getTracksOfAlbum);
