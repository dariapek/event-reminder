import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/',
      pathMatch: 'full',
    },
    {
      path: '',
      component: DashboardComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'registration',
      component: RegistrationComponent,
    },
    {
      path: 'create',
      component: CreateComponent,
    },
    {
      path: 'edit/:id',
      component: EditComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
