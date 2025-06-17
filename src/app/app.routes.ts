import { Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {path: 'detail', component: DetailComponent},
  {path: 'login', component: LoginComponent}
];
