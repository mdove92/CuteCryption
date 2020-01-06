import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cutecryption';  
  constructor() {
  }
  ngAfterViewInit(){
    new WOW().init();
 }
}


