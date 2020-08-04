import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-DSn91OhIj1w56QTGP0P1xb1SeIr2kjI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title ='Akshay Map';
  lat = 51.678418;
  lng = 7.809007;
 }
