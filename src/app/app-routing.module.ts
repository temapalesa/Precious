import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewroomComponent } from './viewroom/viewroom.component';
import { RoomsComponent } from './rooms/rooms.component';


const routes: Routes = [{path: 'register', component:RegisterComponent},
{ path: 'login', component: LoginComponent },{path: 'homepage', component: HomepageComponent},
{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
{ path: 'viewRoom', component: ViewroomComponent},
{ path:'rooms',component:RoomsComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
