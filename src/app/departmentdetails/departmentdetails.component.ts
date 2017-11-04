import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-departmentdetails',
  templateUrl: './departmentdetails.component.html',
  styleUrls: ['./departmentdetails.component.css']
})
export class DepartmentdetailsComponent implements OnInit {

  public departmentId ;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['deptId'];
    this.departmentId = id;
  }

}
