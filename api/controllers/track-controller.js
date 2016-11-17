import {trackModel, commentModel} from '../models';


class TrackControllerClass {
    getList (req, res) {
        return trackModel.getList()
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }

	addComment(req, res) {
		const id = req.params.id;
		const name = req.body.name;
		const message = req.body.message;

		return commentModel.add(id, name, message)
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
	}
}

export const trackController = new TrackControllerClass();
