import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  tecnologias: Array<string>;
  boostrap = '/assets/img/boostrap.png';
  ngrx = '/assets/img/ngrx.png';
  rxjs = '/assets/img/Rxjs.png';
  angular = '/assets/img/angular.png';
  constructor() { }

  ngOnInit() {
    this.tecnologias = [this.boostrap, this.rxjs, this.angular, this.ngrx]
  }

}
