import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedauthenticationService } from './hardcodedauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoutegaurdserviceService implements CanActivate {

  constructor(private hardcoded:HardcodedauthenticationService,private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcoded.isauthenticate())
      return true
    this.route.navigate(['login'])
    return false
  }
}
