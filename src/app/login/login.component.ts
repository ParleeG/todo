import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=''
  password=''
  errorMessage="INVALID LOGIN"
  isInvalid=false

  constructor(private router:Router, private hardcoded:HardcodedauthenticationService) { }

  ngOnInit() {
  }

  whatToDO(){
    // console.log(this.username);
    // if(this.username==='himanshu'&& this.password==='gupta'){
      console.log(this.hardcoded.isauthenticate())
      if(this.hardcoded.authenticate(this.username,this.password)){
        console.log(this.hardcoded.isauthenticate())
      // console.log("successful")
      this.isInvalid=false
      this.router.navigate(["welcome",this.username])

    }
    else{
      this.isInvalid=true
    }
  }

}
