import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  bootstrap:[TicketComponent],
  exports: [TicketComponent]
})
export class TicketModule { }
