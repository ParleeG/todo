import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrormessageComponent } from './errormessage/errormessage.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LogoutComponent } from './logout/logout.component';
import { RoutegaurdserviceService } from './service/routegaurdservice.service';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"welcome/:name",component:WelcomeComponent,canActivate:[RoutegaurdserviceService]},
  {path:"todo",component:TodolistComponent,canActivate:[RoutegaurdserviceService]},
  {path:"logout",component:LogoutComponent,canActivate:[RoutegaurdserviceService]},
  {path:"**",component:ErrormessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
