import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from "./login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  shortInfo = [];

  fullInfo = [];

  user = [];
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.shortInfo = this
      .loginService
      .getInfo();

    this
      .loginService
      .getInfos()
      .subscribe(response => this.fullInfo = response);
  }

  message: string;
  login(value) {
    this.router.navigate(['/nav']);
    // let jsonData = JSON.stringify(value);
    // console.log(jsonData);

    // this.loginService.login(value).subscribe((data) => {
    //   this.router.navigate(['/dashboard']);
    // }, (error) => {
    //   if (error.status == 0) {
    //     alert('Api is not Working or DOwn');
    //   }
    //   else {
    //     console.log(error);
    //     alert(error);
    //   }
    // });
  }
}
