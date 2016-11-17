/**
 * Created by Josue on 17/11/16.
 */
/**
 * Created by Josue on 17/11/16.
 */
import {albumModel} from '../models';



class AlbumControllerClass {
    getList(req, res) {
        return albumModel.getList()
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }

    getOne(req, res) {

        const id = req.params.id;
        return albumModel.getById(id)
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }


    getTracksOfAlbum(req, res) {
        const id = req.params.id;

        return albumModel.getTracksOfAlbum(id)
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }


}

export const albumController = new AlbumControllerClass();
