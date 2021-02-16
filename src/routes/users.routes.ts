import { Router } from 'express';

import CreateUserService from '../services/CreateUsersService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import multer from 'multer';
import uploadConfig from '../config/upload';
import { UpdateDateColumn } from 'typeorm';

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

        user.password = '';

        return response.json(user);
    }
    catch(err){
        return response.status(400).json({ error: err.message });
    }
})

usersRouter.patch('/avatar',  upload.single('avatar') ,async(request, response) => {
    try{
        const updateUserAvatar = new UpdateUserAvatarService();

        const user = await updateUserAvatar.execute({
            user_id: request.user.id,
            avatarFilename:request.file.filename,
        })
        return response.status(200).json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
})
export default usersRouter;