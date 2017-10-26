import {Component, OnInit} from '@angular/core';

import {LoginService} from "./login.service"

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {

  shortInfo = [];

  fullInfo = [];

  user = [];
  constructor(private loginService : LoginService) {}

  ngOnInit() {
    this.shortInfo = this
      .loginService
      .getInfo();

    this
      .loginService
      .getInfos()
      .subscribe(response => this.fullInfo = response);
  }
  submitValue(value) {
    this
      .loginService
      .register(value)
      .subscribe(response => this.user = response);
  }

  login(value) {}
}
