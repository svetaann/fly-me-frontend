import { Component, Inject } from '@angular/core';
import { TicketService } from './ticket.service';
interface FullTicket{
  id: number;
  class: string;
  terminal: string;
  seat: string;
  gate: string;
  date: string;
  food: boolean;
  luggage: boolean;
  price: number;
  passengerName: string;
  plane: string;
  flight: string;
  startTime: string;
  endTime: string;
  from_airport: string;
  to_airport: string;
  from_iata: string;
  to_iata: string;
  from_city: string;
  to_city: string;
}
interface Passenger{
  fullname: string;
  birth_date: string;
  passport: string;
  email: string;
}

@Component({
  selector: 'app-ticketSearch',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent {
  title = "flyme"
  openModalWindow: boolean = false;
  openSuccessWindow: boolean = false;
  chosenTicketId: number = 0;
  tickets: FullTicket[];
  foundTickets: FullTicket[];
  boughtTickets: FullTicket[];
  from: string;
  to: string;
  date: string;
  food: boolean;
  luggage: boolean;
  surname: string;
  name: string;
  patronymic: string;
  birthDate: string;
  passport: string;
  email:string;
  ticketId: number;
  fromCities: string[];
  toCities: string[];
  //
  fromFocused: boolean = false
  searchText=""
  constructor(private ticketService: TicketService){
    
    this.tickets = [];
    this.foundTickets = [];
    this.boughtTickets = [];
    this.from=""
    this.to=""
    this.date=""
    this.surname=""
    this.name=""
    this.patronymic=""
    this.birthDate=""
    this.passport=""
    this.email=""
    this.ticketId=0
    this.food=false
    this.luggage=false
    this.fromCities = [];
    this.toCities = [];
  }

  ngOnInit(){
    this.ticketService.getTickets().subscribe((data) => {
      console.log(data);
      this.tickets = data as FullTicket[];
      for(const ticket of this.tickets){
        const fromCity = ticket.from_city
        const toCity = ticket.to_city
        if (!(this.fromCities.includes(fromCity))){
            this.fromCities.push(fromCity)
        }
        if (!(this.toCities.includes(toCity))){
          this.toCities.push(toCity)
        }
      }
      console.log(this.toCities, this.fromCities)
    })
  }
  fromItemClick(){
    let myContainer = document.getElementById('from') as HTMLInputElement;
    myContainer.value = "pressed";
  }
  findTickets(from: string, to: string, date: string){
    console.log(from,to,date)
    this.ticketService.findTickets(from, to, date).subscribe((data) => {
      console.log(data)
      this.foundTickets = data as FullTicket[];
    })
  }

  chosenTicket(ticket_id: number){
    console.log(ticket_id)
    
    this.chosenTicketId = ticket_id;
    this.openModalWindow = true;
    
  }

  closeWindow(){
    this.openModalWindow = false;
    this.openSuccessWindow = false;
  }

  buyTicket(surname: string, name: string, pathronymic: string, birthDate: string, passport: string,email:string, ticketId: number, food: boolean, luggage: boolean){
    this.openModalWindow = false;
    this.openSuccessWindow = true;
    const user = surname + ' ' + name + ' ' + pathronymic
    let passenger: Passenger = {fullname: user,
      birth_date: birthDate, passport: passport, email: email}
      console.log(user, passenger, ticketId)
    this.ticketService.buyTicket(ticketId, food, luggage, passenger).subscribe((data) => {console.log(data)
    this.boughtTickets = data as FullTicket[];})

  }

}

