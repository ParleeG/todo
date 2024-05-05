import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {

  constructor() { }

  authenticate(username,password){
    if(username==='himanshu'&& password==='gupta'){
      sessionStorage.setItem("authenticateUser",username)
      return true
    }
    else{
      return false
    }
  }

  isauthenticate(){
    let user=sessionStorage.getItem("authenticateUser")
    if(user==null){
      return false
    }
    else{
      return true
    }  
  }

  logout(){
    sessionStorage.removeItem("authenticateUser")
  }
}
