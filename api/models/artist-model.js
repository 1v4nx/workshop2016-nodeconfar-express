
import {database, docTypes} from '../../database';

export class ArtistModelClass {
    getList() {
        return database.find({docType: docTypes.ARTIST})
    }

    getById(id) {
        return database.findOne({docType: docTypes.ARTIST, '_id': id})
    }

    getByIdsList(idList) {
        return database.find(
            {
                docType: docTypes.ARTIST,
                "_id": {"$in": idList}
            }
        )
    }

}

export const artistModel = new ArtistModelClass();

