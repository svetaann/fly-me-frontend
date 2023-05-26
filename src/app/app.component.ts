import { Component } from '@angular/core';
import { TicketService } from './ticket.service';
interface Ticket{
  id: number;
  class: string;
  terminal: string;
  seat: string
  gate: string
  date: string
  price: number;
  plane_id: number;
  flight_id: number
  from_airport: string;
  to_airport: string;
  to_iata: string;
  from_iata: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  tickets: Ticket[];
  foundTickets: Ticket[];
  class: string;
  terminal: string;
  seat: string
  gate: string
  date: string
  price: number;
  plane_id: number;
  flight_id: number;
  from: string;
  to: string;
  start: string;
  end: string;
  from_airport: string;
  to_airport: string
  to_iata: string;
  from_iata: string;

  constructor(private ticketService: TicketService){
    this.tickets = [];
    this.foundTickets = [];
    this.class = "";
    this.terminal = "";
    this.seat = "";
    this.gate = "";
    this.date = "";
    this.price = 0;
    this.plane_id = 1;
    this.flight_id = 1;
    this.from ="";
    this.to ="";
    this.start="";
    this.end=""
    this.from_airport=""
    this.to_airport=""
    this.from_iata=""
    this.to_iata=""
  }
  title = "flyme"
  ngOnInit(){
    this.ticketService.getTickets().subscribe((data) => {
      console.log(data);
      this.tickets = data as Ticket[];
    })
  }

  addTicket(cls: string, trmnl: string, st: string, gt: string, dt: string, price: number, plane_id: number, flight_id: number){
    this.ticketService.addTicket(cls, trmnl, st,gt,dt,price,plane_id,flight_id).subscribe()
    this.class = "";
    this.terminal = "";
    this.seat = "";
    this.gate = "";
    this.date = "";
    this.price = 0;
    this.plane_id = 1;
    this.flight_id = 1;
  }

  deleteTicket(id: number){
    this.ticketService.deleteTicket(id).subscribe((data) => {
      console.log(data);
    })
  }

  findTickets(from: string, to: string, date: string){
    this.ticketService.findTickets(from, to, date).subscribe((data) => {
      console.log(data)
      this.foundTickets = data as Ticket[];
    })
  }
  // title = "geeksforgeeks-multiSelect";
  
  // cities = [
  //   { id: 1, name: "Москва" },
  //   { id: 2, name: "Уфа" },
  //   { id: 3, name: "Новосибирск" },
  //   { id: 4, name: "Волгорад" }
  // ];
  // cities_to = [
  //   { id: 1, name: "Москва" },
  //   { id: 2, name: "Уфа" },
  //   { id: 3, name: "Новосибирск" },
  //   { id: 4, name: "Волгорад" }
  // ];
  // start_date = [
  //   {id: 1, name: "2023-05-23"}
  // ]
  // end_date = [
  //   {id: 1, name: "2023-05-29"}
  // ]
  // passenger_amount = [1,2,3]
  // from = [{ id: 3, name: "Volkswagen Ford" }];
  
  
  // to = [{ id: 3, name: "Volkswagen Ford" }];
  // start = [{id: 4, date: "2023-07-20"}];
  // end = [{id: 4, date: "2023-07-20"}];
  // amount = [1]
}

