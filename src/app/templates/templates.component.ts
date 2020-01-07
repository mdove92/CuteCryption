import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
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
