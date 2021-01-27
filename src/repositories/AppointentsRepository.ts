import Appointment from '../models/Appointment';
//import { isEqual } from '../models/Appointment';

//DATA Transfer object
interface CreateAppointmentDTO{
    provider:string;
    date:Date;
}
class AppointmentsRepository{
    private appointments: Appointment[];

    constructor(){
        this.appointments = [];

    }
    public showAppointments(){
        return this.appointments;
    }
    public findByDate(date:Date):Appointment | null{
        const findAppointment = this.appointments.find(appointment => {
            //  isEqual(parsedDate, appointment.date)
              if(appointment.date == date){
                  return true;
                  
              }
          })
        return findAppointment || null;
    }   

    public create({ provider, date }: CreateAppointmentDTO): Appointment{
        const appointment = new Appointment({provider, date});
        this.appointments.push(appointment);

        return appointment;
    }
}

export default AppointmentsRepository;