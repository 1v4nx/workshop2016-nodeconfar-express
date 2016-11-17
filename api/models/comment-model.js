import {database, docTypes} from '../../database';

export class CommentModelClass {
    getList() {
        return database.find({docType: docTypes.COMMENT})
    }

    getById(id) {
        return database.findOne({docType: docTypes.COMMENT, '_id': id})
    }

    add(trackId, name, message) {
		const newComment = {
			docType: docTypes.COMMENT,
			name,
			message
		}

		return database.update({ _id: trackId, docType: docTypes.TRACK }, { $push: { comments: newComment } });
	}

}

export const commentModel = new CommentModelClass();
