//   /lib/controllers/crmController.ts
import * as mongoose from 'mongoose';
import { PostSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Post = mongoose.model('Post', PostSchema);
export class PostController{

    public addNewPost (req: Request, res: Response) {                
        let newPost = new Post(req.body);
    
        newPost.save((err, post) => {
            if(err){
                res.send(err);
            }    
            res.json(post);
        });
    }
    public getPosts (req: Request, res: Response) {           
        Post.find({}, (err, post) => {
            if(err){
                res.send(err);
            }
            res.json(post);
        });
    }

    public getPostWithID (req: Request, res: Response) {           
        Post.findById(req.params.PostId, (err, post) => {
            if(err){
                res.send(err);
            }
            res.json(post);
        });
    }

    public updatePost (req: Request, res: Response) {           
        Post.findOneAndUpdate({ _id: req.params.PostId }, req.body, { new: true }, (err, post) => {
            if(err){
                res.send(err);
            }
            res.json(post);
        });
    }

    public deletePost (req: Request, res: Response) {           
        Post.remove({ _id: req.params.PostId }, (err, post) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted post!'});
        });
    }
    
}