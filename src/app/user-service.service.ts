import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }



  public login(user:User): Observable<any>{
    let url='http://localhost:8080/steam/api/user/login';
    let body=user;
    let headers={'Content-Type':'application/json'}
    return this.http.post<any>(url,body,{headers})
  }

  public newUser(user:User): Observable<any>{
    let url='http://localhost:8080/steam/api/user/newUser';
    let body=user;
    let headers={'Content-Type':'application/json'}
    return this.http.post<any>(url,body,{headers})

  }
}
