import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Observable} from 'rxjs';
@Injectable()
export class ProfileService {

    private userListUrl : string = "http://localhost:8090/api/userList";
    // private registerUrl : string = "http://localhost:8090/api/register";
    // private loginUrl : string = "http://localhost:8090/api/login";

    constructor(private http : Http) {}

    getInfos() : Observable < any > {
        return this
            .http
            .get(this.userListUrl)
            .map((response : Response) =>{
                console.log(response.json());
            })
            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
    }

}
