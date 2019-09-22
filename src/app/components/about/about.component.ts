import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    public title: string;
    public subtitle: string;
    public email: string;

  constructor() { 
   this.title = "Marco Puga";
   this.subtitle = "Desarrollador web";
   this.email = "marcopuga49@gmail.com";
  }

  ngOnInit() {
  }

}
