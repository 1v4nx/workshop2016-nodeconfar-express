import {database, docTypes} from '../../database';
import {albumModel} from './album-model'

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


}


export const bandModel = new BandModelClass();
