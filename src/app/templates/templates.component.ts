import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  javaBackendUrl = 'http://localhost:8080';
  templates = {}
  scope={}
  items =["Default","Bubbly", "Colorful", "Fun", "Hank"]
  class = "";

  @Input() formStyle = "form-style-3"
  
  constructor(private http: HttpClient) { 
    this.class="Default";
  }

  selectedItemChanged = function(event){
    this.formStyle= event.target.value;
  }
  

   getTemplates(){
    this.http.get(this.javaBackendUrl).subscribe((data) =>{
      this.templates = data;
    });
   }

  ngOnInit() {
    this.getTemplates();
  }


}
