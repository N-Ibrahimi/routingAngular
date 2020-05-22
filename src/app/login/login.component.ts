import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['']
})
export class LoginComponent implements OnInit {

  public userName = '';
  public notAutorized = false;
  constructor(private router: Router) {

  }

  ngOnInit() {
  }


  login() {
    if (this.userName === 'nasim') {
      this.router.navigate(['user', this.userName, ]);
    } else {
    this.notAutorized = true;
    }
    this.userName = '';
  }

  goTOHome() {
    this.notAutorized = false;
    this.router.navigateByUrl('');
  }
}
