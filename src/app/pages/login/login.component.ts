import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { LoginService } from '../../services/api-login/login.service';
import { LoginRequest } from '../../services/api-login/login.models';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email = ''
  password = ''

  constructor(private loginService: LoginService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const loginRequest: LoginRequest = {
      email: this.email,
      password: this.password
    };

    this.loginService.checkUser(loginRequest).subscribe({
      next: (response) => {
        console.log('Login com sucesso:', response);
        localStorage.setItem('token', response.token);
      },
      error: (err) => {
        console.error('Erro ao fazer login:', err);
      }
    });
  }

}
