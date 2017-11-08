import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';

import {SimpleNotificationsModule} from 'angular2-notifications';
import 'angular2-notifications';
import {ToastyModule} from 'ng2-toasty';

import {AppComponent} from './app.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {DepartmentListComponent} from './department-list/department-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {LoginService} from './login/login.service';
import {RegisterService} from './register/register.service';
import {NavService} from './nav/nav.service';
import {DepartmentdetailsComponent} from './departmentdetails/departmentdetails.component';
import {UploadComponent} from './upload/upload.component';
import {NewloginComponent} from './newlogin/newlogin.component';
import { HelpComponent } from './help/help.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { Login4Component } from './login4/login4.component';
import { Login5Component } from './login5/login5.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent,
    DepartmentdetailsComponent,
    UploadComponent,
    ForgetpasswordComponent,
    NewloginComponent,
    HelpComponent,
    Login1Component,
    Login2Component,
    Login3Component,
    Login4Component,
    Login5Component,
    PagenotfoundComponent

  ],
  imports: [
    // PushNotificationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        'path': "",
        "component": LoginComponent
      }, {
        'path': "home",
        "component": HomeComponent
      }, {
        'path': "dashboard",
        "component": DashboardComponent
      }, {
        'path': "employee",
        "component": EmployeeListComponent,
        data: {
          title: 'Employee List'
        }
      }, {
        'path': "department",
        "component": DepartmentListComponent,
        data: {
          title: 'Department List'
        }
      }, {
        'path': "department/:deptId",
        "component": DepartmentdetailsComponent
      }, {
        'path': "login",
        "component": LoginComponent
      }, {
        'path': "register",
        "component": RegisterComponent
      }, {
        'path': "nav",
        "component": NavComponent
      }, {
        'path': "forget",
        "component": ForgetpasswordComponent
      }, {
        'path': "new-login",
        "component": NewloginComponent
      }
      , {
        'path': "help",
        "component": HelpComponent
      }
      , {
        'path': "login1",
        "component": Login1Component
      }
      , {
        'path': "login2",
        "component": Login2Component
      }
      , {
        'path': "login3",
        "component": Login3Component
      }
      , {
        'path': "login4",
        "component": Login4Component
      }, {
        'path': "login5",
        "component": Login5Component
      }
      , {
        'path': "**",
        "component": PagenotfoundComponent
      }

      
    ]),
    SimpleNotificationsModule.forRoot(),
    ToastyModule.forRoot()
  ],
  providers: [
    LoginService, RegisterService, NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}