//   /lib/models/crmModel.ts
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
    userName: {
        type: String,
    },
    postTitle: {
        type: String,
    },
    coverPhoto: {
        type: String            
    },
    description: {
        type: String            
    },
    toolsUsed: {
        type: String            
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String
    }
});