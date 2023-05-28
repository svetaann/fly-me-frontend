
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgSelectModule } from "@ng-select/ng-select";

import { HttpClientModule } from "@angular/common/http";
import { TicketComponent } from "./ticket.component";

@NgModule({
  declarations: [TicketComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  exports: [TicketComponent],
  providers: [],
  bootstrap: [TicketComponent],
})
export class TicketModule { }