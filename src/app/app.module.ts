import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';


import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { NavService } from './nav/nav.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,HttpModule,HttpClientModule,
    RouterModule.forRoot([
      {'path':"home","component":HomeComponent},
      {'path':"employee","component":EmployeeListComponent},
      {'path':"department","component":DepartmentListComponent},
      {'path':"login","component":LoginComponent},
      {'path':"register","component":RegisterComponent},
      {'path':"nav","component":NavComponent},
      
  ])
  ],
  providers: [LoginService,RegisterService,NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
