import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html'


})
export class DepartmentListComponent implements OnInit {
  data = [];
  constructor(private router:Router) {
   
  }

  ngOnInit() {
    console.log("Hii");
    this.data = [
      {
        "deptId":"1",
        "deptName": "Angular"        
      },{
        "deptId":"2",
        "deptName": "Java"        
      },{
        "deptId":"3",
        "deptName": "Node"        
      },{
        "deptId":"4",
        "deptName": "Spring"        
      },{
        "deptId":"5",
        "deptName": "Ionic"        
      }
    ]
  }

  onSelect(dept){
    this.router.navigate(['/department',dept.deptId])

  }


}
