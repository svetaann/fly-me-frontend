import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
interface Passenger{
  fullname: string;
  birth_date: string;
  passport: string;
}
@Injectable({
  providedIn: 'root',
})

export class TicketService {
  host = 'http://localhost:3001';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) {}
  getTickets() {
    return this.http.get(`${this.host}/ticket`).pipe(map((res) => res));
  }
  addTicket(cls: string, trmnl: string, st: string, gt: string, dt: string, price: number, plane_id: number, flight_id: number) {
    return this.http.post(`${this.host}/ticket`, {
        class: cls,
        terminal: trmnl,
        seat: st,
        gate: gt,
        date: dt,
        price: price,
        plane_id: plane_id,
        flight_id: flight_id
    });
  }
  buyTicket(ticketId: number, passenger: Passenger){
    console.log(ticketId, passenger.fullname, passenger.birth_date)
    return this.http.post(`${this.host}/ticket/buy/${ticketId}`,{
      fullname: passenger.fullname, 
      birth_date: passenger.birth_date, 
      passport:passenger.passport});
  }
  deleteTicket(id: number) {
    return this.http.delete(`${this.host}/ticket/${id}`);
  }
  findTickets(from: string, to: string, date: string){
    const params = new HttpParams()
    .set('from', from)
    .set('to', to)
    .set('date', date)
    return this.http.get(`${this.host}/ticket/find`,{ params: params }).pipe(map((res) => res))
  }
}