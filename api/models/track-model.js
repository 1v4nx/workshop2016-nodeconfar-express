import {database, docTypes} from '../../database';


export class TrackModelClass {
    getList () {
        return database.find({docType: docTypes.TRACK})
    }

	getCommentsOfTrack(id) {
        return database.findOne({docType: docTypes.TRACK, '_id': id})
            .then((track)=> {
                return track.comments;
            });
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
