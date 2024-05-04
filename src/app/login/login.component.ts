import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit() {
  }

  whatToDO(){
    // console.log(this.username);
    if(this.username==='himanshu'&& this.password==='gupta'){
      // console.log("successful")
      this.isInvalid=false
      this.router.navigate(["welcome"])

    }
    else{
      this.isInvalid=true
    }
  }

}
