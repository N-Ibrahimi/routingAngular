import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {
  protected user: User = new User();
  constructor( private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe( (param) => {
      this.user.username = param['userName'];
    } );
   }

  ngOnInit() {
  }

}

class User {
  username: string;
}
