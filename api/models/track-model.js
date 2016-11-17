import {database, docTypes} from '../../database';


export class TrackModelClass {
    getList () {
        return database.find({docType: docTypes.TRACK})
    }


    getByIdsList(idList) {
        return database.find(
            {
                docType: docTypes.TRACK,
                "_id": {"$in": idList}
            }
        )
    }
}


export const trackModel = new TrackModelClass();
