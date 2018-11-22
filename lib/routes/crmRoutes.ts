// /lib/routes/crmRoutes.ts
import {Request, Response} from "express";
import { PostController } from "../controllers/crmController"

export class Routes {  
    
    public postController: PostController = new PostController()

    public routes(app): void {  

        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
    }
}