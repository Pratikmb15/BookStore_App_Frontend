import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  Login(reqData: any) {

    let header = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        })
    }
    return this.httpService.PostMethod('http://localhost:5093/api/User/login', reqData, false, header)

  }

  Register(reqData: any) {

    let header = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        })
    }
    return this.httpService.PostMethod('http://localhost:5093/api/User', reqData, false, header)
  }
}

