import { Router } from 'express';

import CreateUserService from '../services/CreateUsersService';
import multer from 'multer';
import uploadConfig from '../config/upload';

//import ensureAuthenticated from '../middlewares/ensureAuthenticate';


const usersRouter = Router();
const upload = multer(uploadConfig);



usersRouter.post('/', async (request, response) => {
    try{
        const { name, email, password } = request.body;
        
        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name,
            email,
            password
        })

        delete user.password;

        return response.json(user);
    }
    catch(err){
        return response.status(400).json({ error: err.message });
    }
})

usersRouter.patch('/avatar',  upload.single('avatar') ,async(request, response) => {
    return response.json({ok:true});
})
export default usersRouter;