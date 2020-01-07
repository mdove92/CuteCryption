import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
 //import { WOW } from 'wowjs/dist/wow.min';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  javaBackendUrl = 'http://localhost:8080';
  templates = {}
  constructor(private http: HttpClient) { }

   getTemplates(){
    this.http.get(this.javaBackendUrl).subscribe((data) =>{
      this.templates = data;
    });
   }

  ngOnInit() {
    this.getTemplates();
  }
}


