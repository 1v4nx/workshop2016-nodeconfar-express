import {database, docTypes} from '../../database';
import {albumModel} from './album-model'
import {artistModel} from './artist-model'

export class BandModelClass {
    getList() {
        return database.find({docType: docTypes.BAND})
    }


    getById(id) {
        return database.findOne({docType: docTypes.BAND, '_id': id})
    }

    getAlbumsOfBand(id) {
        return database.findOne({docType: docTypes.BAND, '_id': id})
            .then((band)=> {
                const albumsID = band.albums;
                return albumModel.getByIdsList(albumsID);

            });
    }

    getArtistsOfBand(id) {
        return database.findOne({docType: docTypes.BAND, '_id': id})
            .then((band)=> {
                const artistsID = band.artists;
                return artistModel.getByIdsList(artistsID);

            });
    }


}


export const bandModel = new BandModelClass();
