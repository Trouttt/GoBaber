import { Router } from 'express';

import CreateUserService from '../../../../modules/users/services/CreateUsersService';
import UpdateUserAvatarService from '../../../../modules/users/services/UpdateUserAvatarService';
import multer from 'multer';
import uploadConfig from '../../../../config/upload';

//import ensureAuthenticated from '../middlewares/ensureAuthenticate';


const usersRouter = Router();
const upload = multer(uploadConfig);



usersRouter.post('/', async (request, response) => {

        const { name, email, password } = request.body;
        
        const createUser = new CreateUserService();
        const user = await createUser.execute({
            name,
            email,
            password
        })

        user.password = '';

        return response.json(user);
    

})

usersRouter.patch('/avatar',  upload.single('avatar') ,async(request, response) => {
 
        const updateUserAvatar = new UpdateUserAvatarService();

        const user = await updateUserAvatar.execute({
            user_id: request.user.id,
            avatarFilename:request.file.filename,
        })
        return response.status(200).json(user);
   
})
export default usersRouter;