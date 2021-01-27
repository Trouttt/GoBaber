import { Router } from 'express';
import Appointment from '../models/Appointment';
//import { startOfHour, parseISO, isEqual} from 'date-fns';
//parseISO = string to date.
const appointmentsRouter = Router();

const appointments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;

    //const parsedDate = startOfHour(parseISO(date));
    const findAppointmentInSameDate = appointments.find(appointment => {
      //  isEqual(parsedDate, appointment.date)
    
        if(appointment.date == date){
        
            return true;
        }
    })
    if(findAppointmentInSameDate){
        return response.status(400).json({message: 'this appointment is already booked'})
    }
    const appointment = new Appointment(provider, date);

    appointments.push(appointment)
    return response.json(appointment);
})
export default appointmentsRouter;