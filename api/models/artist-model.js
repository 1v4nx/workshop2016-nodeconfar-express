
import {database, docTypes} from '../../database';

export class ArtistModelClass {
    getList() {
        return database.find({docType: docTypes.ARTIST})
    }

    getById(id) {
        return database.findOne({docType: docTypes.ARTIST, '_id': id})
    }

}

export const artistModel = new ArtistModelClass();

