
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgSelectModule } from "@ng-select/ng-select";
  
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
  
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgSelectModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}