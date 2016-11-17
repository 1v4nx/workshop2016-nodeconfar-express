/**
 * Created by Josue on 17/11/16.
 */
import {database, docTypes} from '../../database';


export class AlbumModelClass {
    getList() {
        return database.find({docType: docTypes.ALBUM})
    }


    getByIdsList(idList) {
        return database.find(
            {
                docType: docTypes.ALBUM,
                "_id": {"$in": idList}
            }
        )
    }

}


export const albumModel = new AlbumModelClass();