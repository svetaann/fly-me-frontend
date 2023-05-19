import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{
    ticket$: Observable<any> | undefined;
    constructor(private ticketService: TicketService){}
    ngOnInit(): void {
      this.ticket$ = this.ticketService.getTickets();
    }
}
