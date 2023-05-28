
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TicketModule } from "./ticket/ticket.module";
import { TicketComponent } from "./ticket/ticket.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, TicketModule],
  providers: [TicketComponent],
  bootstrap: [AppComponent, TicketComponent],
})
export class AppModule { }