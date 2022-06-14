import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  public username:string;
  public password:string;


  constructor(private rest:UserServiceService) {
    this.username=""
    this.password=""

   }


  login():void{
    let user=new User(this.username,this.password)
    this.rest.login(user).subscribe(
      (erg)=>{
        alert(erg.message)
      }
    )
  }

  newuser():void{
    let user=new User(this.username,this.password)
    this.rest.newUser(user).subscribe(
      (erg)=>{
        alert(erg.message)
      }
    ); 
}

}





  
 



