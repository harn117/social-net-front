import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AuthService } from "../../../services/auth.service";
import { UserModel } from '../../../models/user.model';

import Swal from "sweetalert2";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  show = false;
  token!: string;
  user: UserModel = {
    _id: '',
    fullName: '',
    email: '',
    password: '',
    age: 0,
    createdAt: '',
    deletedAt: false,
    updatedAt: '',
  }

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
      if (this.authService.tokenExists()) {
        if (this.authService.tokenExists()) {
            location.replace('/dashboard');
        } else {
            this.authService.logout();
        }
    }
    }

  submitForm(): void {
    alert("user name is " + this.user.password);
    console.log("user name is " + this.user.email);
    this.login();
  }

  clear(){
    this.user.fullName ='';
    this.user.email = '';
    this.user.password = '';
    this.user.age = 0;
    this.show = true;
  }

  login(): void {
    this.authService.login({email: this.user.email, password: this.user.password}).subscribe({
        next: (r: any) => {
            this.authService.saveToken(r.token);
        },
        complete: () => {
            this.clear();;
            location.replace('dashboard');
        },
        error: () => {
            this.showAlert('error', 'Usuario o contraseña invalidos, por favor verifiquelo', '', 'Entendido');
            // Crear modal alerta
        }
    });
}

  showAlert(icon: any, title: string, text: string, textButton: string): void {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      allowOutsideClick: false,
      confirmButtonColor: '#596EDB',
      confirmButtonText: textButton
    });
  }

}
