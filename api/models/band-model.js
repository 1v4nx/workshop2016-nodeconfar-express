import {database, docTypes} from '../../database';


export class BandModelClass {
    getList() {
        return database.find({docType: docTypes.BAND})
    }


    getById(id) {
        return database.findOne({docType: docTypes.BAND, '_id': id})
    }

    getAlbumsOfBand(id) {
        return database.findOne({docType: docTypes.BAND, '_id': id})
    }




}


export const bandModel = new BandModelClass();
