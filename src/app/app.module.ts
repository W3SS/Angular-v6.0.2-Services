import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpModule

import { HttpService } from './http.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpClientModule // <-- Include module in our AppModules
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
