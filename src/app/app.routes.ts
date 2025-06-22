import { Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './auth.guard';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'detail', component: DetailComponent, canActivate: [authGuard]}

];
