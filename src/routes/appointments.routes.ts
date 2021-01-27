import { Router } from 'express';
import AppointmentsRepository from '../repositories/AppointentsRepository';


//import { startOfHour, parseISO, isEqual} from 'date-fns';
//parseISO = string to date.
const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();



appointmentsRouter.get('/', (request,response) => {
    const showAppointments = appointmentsRepository.showAppointments();
    return response.status(200).json(showAppointments);
})

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;

    //const parsedDate = startOfHour(parseISO(date));

    const findAppointmentInSameDate = appointmentsRepository.findByDate(date);
    

    if(findAppointmentInSameDate){
        return response.status(400).json({message: 'this appointment is already booked'})
    }

    const appointment = appointmentsRepository.create({provider,date});

    return response.json(appointment);
})
export default appointmentsRouter;