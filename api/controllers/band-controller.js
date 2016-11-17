/**
 * Created by Josue on 17/11/16.
 */
import {bandModel} from '../models';


class BandControllerClass {
    getList(req, res) {
        return bandModel.getList()
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }

    getOne(req, res) {

        const id = req.params.id;
        return bandModel.getById(id)
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }


    getAlbumsOfBand(req, res) {

        const id = req.params.id;
        return bandModel.getAlbumsOfBand(id)
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }
}

export const bandController = new BandControllerClass();
