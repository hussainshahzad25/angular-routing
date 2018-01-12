



import { Component, OnInit } from '@angular/core';

import { NavService } from "./nav.service"

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  shortInfo = [];

  fullInfo = [];

  user = [];
  constructor(private navService: NavService) { }

  ngOnInit() {
    this.shortInfo = this
      .navService
      .getInfo();

    this
      .navService
      .getInfos()
      .subscribe(response => this.fullInfo = response);
  }
  submitValue(value) {
    this
      .navService
      .register(value)
      .subscribe(response =>{
        this.user = response;
      },(error)=>{
        if (error.status == 0) {
          alert('Api is not Working or Down');
        }
        else {
          console.log(error);
          alert(error);
        }
      });
  }

  login(value) { }
}

