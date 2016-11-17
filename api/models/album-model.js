/**
 * Created by Josue on 17/11/16.
 */
import {database, docTypes} from '../../database';
import {trackModel} from './track-model'

export class AlbumModelClass {
    getList() {
        return database.find({docType: docTypes.ALBUM})
    }

    getById(id) {
        return database.findOne({docType: docTypes.ALBUM, '_id': id})
    }

    getByIdsList(idList) {
        return database.find(
            {
                docType: docTypes.ALBUM,
                "_id": {"$in": idList}
            }
        )
    }

    getTracksOfAlbum(id) {
        return database.findOne({docType: docTypes.ALBUM, '_id': id})
            .then((album)=> {
                const albumsID = album.tracks;
                return trackModel.getByIdsList(albumsID);

            });
    }

}


export const albumModel = new AlbumModelClass();