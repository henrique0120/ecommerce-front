import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { RegisterRequest } from '../../services/api-register/register.models';

@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  name = ''
  email = ''
  password = ''
  phone = ''
  roles: string[] = ['USER'];

  onSubmit(form: NgForm) {
    if (form.invalid) return;

        const registerRequest: RegisterRequest = {
          email: this.email,
          password: this.password,
          name: this.name,
          phone: this.phone,
          roles: this.roles
        };
  }

}
