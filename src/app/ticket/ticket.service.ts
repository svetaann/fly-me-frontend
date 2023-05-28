import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

interface Passenger{
  fullname: string;
  birth_date: string;
  passport: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})

export class TicketService {
  host = 'http://localhost:3001';
  constructor(private http: HttpClient) {}
  getTickets() {
    return this.http.get(`${this.host}/ticket/fullForSale`).pipe(map((res) => res));
  }
  
  findTickets(from: string, to: string, date: string){
    const params = new HttpParams()
    .set('from', from)
    .set('to', to)
    .set('date', date)
    return this.http.get(`${this.host}/ticket/find`,{ params: params }).pipe(map((res) => res))
  }

  buyTicket(ticketId: number, food: boolean, luggage: boolean, passenger: Passenger){
    console.log(ticketId,food,luggage, passenger.fullname, passenger.birth_date)
    return this.http.post(`${this.host}/ticket/buy/${ticketId}`,{
      fullname: passenger.fullname, 
      birth_date: passenger.birth_date, 
      passport:passenger.passport,
      email: passenger.email});
  }

  // generatePdf(ticketId: number){
  //   return this.http.get(`${this.host}/ticket/pdf/${ticketId}`)
  // }
}