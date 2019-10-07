import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  urlBoss: string;
  urlValakax: string;
  imgValakax = '/assets/img/logovalakax.png';
  imgIantech = '/assets/img/logoiantech.png';
  constructor() { }

  ngOnInit() {
    this.title = "Desafío";
    this.urlBoss = "https://iantech.net/";
    this.urlValakax = "http://valakax.com.ar/"
  }

}
