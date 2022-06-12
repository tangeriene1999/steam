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
  public click:boolean;
  public result:string;
  public user:User=new User("","");
  constructor(private rest:UserServiceService) {
    this.username=""
    this.password=""
    this.click=false
    this.result=""
    this.user=new User("","");
   }

  checkout():void{
    this.click=!this.click
    this.user.setUsername(this.username)
    this.user.setPassword(this.password)
    this.newuser
  }
  login():boolean{
    if((this.username=="xiang")&&(this.password==this.password)){
      return true;
    }else{
      return false;
    }
  }
  output():string{
    if(this.click){
      return "asdcsad"+this.result;
    }
    return "";
  }
  newuser(){
    this.rest.login(this.username,this.password).subscribe(
      (erg)=>{
        console.log(erg)
      }
    );

    
  
}

}





  
 



