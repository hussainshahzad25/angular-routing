import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-departmentdetails',
  templateUrl: './departmentdetails.component.html',
  styleUrls: ['./departmentdetails.component.css']
})
export class DepartmentdetailsComponent implements OnInit {

  public departmentId;
  public departmentName;
  // public id;
  public objects = new Object;
  constructor(private route: ActivatedRoute, private router: Router) { }

  // ngOnInit() {
  //   let id = this.route.snapshot.params['deptId'];
  //   this.departmentId = id;
  // }

  ngOnInit() {
    //  this.route.params.subscribe((params: Params)=>{
    //   let id = parseInt(params['deptId']);
    //   this.departmentId = id;
    //  })
    this.route.params.subscribe(params => {
      let id = parseInt(params['deptId']);
      this.departmentId = id;
      // let deptName = params['deptName'];
      // this.departmentName = deptName;

      this.objects = params;
      console.log(JSON.stringify(params));
    });
  }
  goPrevious() {
    let preId = this.departmentId - 1;
    this.router.navigate(['/department', preId]);
  }

  goNext() {
    let nextPage = this.departmentId + 1;
    this.router.navigate(['/department', nextPage]);
  }


}
