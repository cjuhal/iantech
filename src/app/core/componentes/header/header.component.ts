import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  imgBoss: string;
  urlBoss: string;
  url_ch_: string;
  urlValakax: string;
  constructor() { }

  ngOnInit() {
    this.title = "Desafío";
    this.urlBoss = "https://iantech.net/";
    this.imgBoss = "https://iantech.net/img/logoiantech.png"
    this.urlValakax = "http://valakax.com.ar/"
    this.url_ch_ = this.urlValakax + "wp-content/uploads/2018/04/logo200.png";
  }

}
