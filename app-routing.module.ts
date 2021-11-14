import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'add',
    component: AddRestoComponent,
  },
  {
    path: 'update/:id',
    component: UpdateRestoComponent,
  },
  {
    path: 'list',
    component: ListRestoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
