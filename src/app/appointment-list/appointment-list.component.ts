import { Component } from '@angular/core';
import { Appointment } from '../model/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
    
    //Use Interface to define object structure

    newApptDescription:string = "";
    newApptDate:Date = new Date();
    appointments : Appointment[]= [];

    ngOnInit(): void {
      var savedAppointments = localStorage.getItem("appointments");
      this.appointments = savedAppointments != null ? JSON.parse(savedAppointments): [];
    }

    addOnClick():void{

      if(this.newApptDescription.trim().length && this.newApptDate != null){
        this.appointments.push({
          id: Date.now(),
          desc: this.newApptDescription,
          date: this.newApptDate
        })
        localStorage.setItem("appointments",JSON.stringify(this.appointments));
      }
      this.newApptDescription = "";
      this.newApptDate = new Date();
    }

    removeOnClick(index:number):void{
      this.appointments.splice(index,1)
      localStorage.setItem("appointments",JSON.stringify(this.appointments));
    }
}
