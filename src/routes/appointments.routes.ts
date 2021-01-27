import { Router } from 'express';

import AppointmentsRepository from '../repositories/AppointentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

//import { startOfHour, parseISO, isEqual} from 'date-fns';
//parseISO = string to date.
const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();



appointmentsRouter.get('/', (request,response) => {
    const showAppointments = appointmentsRepository.showAppointments();
    return response.status(200).json(showAppointments);
})

appointmentsRouter.post('/', (request, response) => {
    try{
        const { provider, date } = request.body;

        //const parsedDate = startOfHour(parseISO(date));
        //const parsedDate = parseISO(date);          
    
        const createAppointment = new CreateAppointmentService(appointmentsRepository);
        
        const appointment = createAppointment.execute({ date: date, provider})
       
        return response.json(appointment);
    }
    catch(err){
        return response.status(400).json({ error: err.message });
    }
})
export default appointmentsRouter;