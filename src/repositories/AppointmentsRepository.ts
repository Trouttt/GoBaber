import Appointment from '../models/Appointment';
import { EntityRepository, Repository } from 'typeorm';

//DATA Transfer object
/*
interface CreateAppointmentDTO{
    provider:string;
    date:Date;
}
*/
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>{

  
    public async findByDate(date:Date): Promise<Appointment | null>{
        /*
        const findAppointment = this.appointments.find(appointment => {
            //  isEqual(parsedDate, appointment.date)
              if(appointment.date == date){
                  return true;
                  
              }
          })
        */

        const findAppointment = await this.findOne({
            where: { date }
        })
        return findAppointment || null;
    }   
}

export default AppointmentsRepository;