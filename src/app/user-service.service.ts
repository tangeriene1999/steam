import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserComponent } from './user/user.component';
import { User } from './user/user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  
  public getSeries(): Observable<any>{
    let url='http://localhost:8080/steam/api/user'
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(url,{ headers, responseType: 'text'})

  }

  public login(user:User): Observable<any>{
    let url='http//localhost:8080/steam/api/user/newUser';
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8')  
    return this.http.post<any>(url,user,{headers, responseType: 'text' as 'json' })
  }
}
