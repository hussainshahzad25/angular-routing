import {Component} from '@angular/core';

import {RegisterService} from './register.service';

@Component({
  selector: 'app-register', 
  templateUrl: './register.component.html', 
  styleUrls: ['./register.component.css']})
export class RegisterComponent  {

  info = [];

  infos = [];

  user = [];
  constructor(private registerService : RegisterService) {}

  register(value) {

    let jsonData = JSON.stringify(value);
    console.log(jsonData);
    
    this
      .registerService
      .register(value)
      .subscribe(response => this.user = response);
  }

  

}
