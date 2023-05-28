
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgSelectModule } from "@ng-select/ng-select";

import { HttpClientModule } from "@angular/common/http";
import { TicketComponent } from "./ticket.component";
import { FilterPipe } from "./filter.pipe";
  
@NgModule({
  declarations: [TicketComponent, FilterPipe],
  imports: [BrowserModule, FormsModule, NgSelectModule, HttpClientModule,FormsModule,NgSelectModule],
  exports: [TicketComponent],
  providers: [],
  bootstrap: [TicketComponent],
})
export class TicketModule {}