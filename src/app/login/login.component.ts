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

    // let jsonData = JSON.stringify(value);
    // console.log(jsonData);

    this
      .loginService
      .login(value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/dashboard']);
      }, (error) => {               
        let jsonData = JSON.parse(error._body);
        console.log(jsonData.message);        
        alert(jsonData.message)
      });
  }
}
