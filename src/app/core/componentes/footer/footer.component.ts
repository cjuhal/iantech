import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 tecnologias: Array<string>;
  constructor() { }

  ngOnInit() {
    this.tecnologias = ["https://ngrx.io/assets/images/badge.svg",
"http://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png",
"https://www.toolsqa.com/wp-content/uploads/2019/03/protractor-tutorial-1.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"];

  }

}
