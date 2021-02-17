import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

import CreateUserService from '../services/CreateUsersService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
   
        const { email, password} = request.body

        const authenticateUser = new AuthenticateUserService();

        const { user , token} = await authenticateUser.execute({
            email,
            password
        })
        user.password = '';
        return response.json({ user, token });
    
})
export default sessionsRouter;