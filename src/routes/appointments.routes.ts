import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

import { startOfHour, parseISO, isEqual} from 'date-fns';
//parseISO = string to date.
const appointmentsRouter = Router();




appointmentsRouter.get('/', async (request,response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const showAppointments = await appointmentsRepository.find();
    return response.status(200).json(showAppointments);
})

appointmentsRouter.post('/', async (request, response) => {
    try{
        const { provider, date } = request.body;

        //const parsedDate = startOfHour(parseISO(date));
        const parsedDate = parseISO(date);          
      
        const createAppointment = new CreateAppointmentService();
        
        const appointment = await createAppointment.execute({ date: parsedDate, provider})
       
        return response.json(appointment);
    }
    catch(err){
        return response.status(400).json({ error: err.message });
    }
})
export default appointmentsRouter;