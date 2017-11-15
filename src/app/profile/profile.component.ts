import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../profile/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userEmail: string;
  public departmentName;

  fullInfo = [];
  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let email = (params['email']);
      this.userEmail = email;
      console.log("Profile :: "+ JSON.stringify(params));
    });   
  }

  getInfos(){
    this.profileService.getInfos().subscribe(response =>{

      console.log(JSON.stringify(response));
      this.fullInfo = response;
    } );
  }


}
