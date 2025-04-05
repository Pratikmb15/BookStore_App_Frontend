import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import path from 'path';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';


const routes: Routes = [
  
    {path:'Auth',component:AuthLayoutComponent},
    {path:'Home',component:DashboardComponent,
      children:[{path:'',component:DisplayBooksComponent}]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
