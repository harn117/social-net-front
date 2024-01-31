import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from "../../../services/auth.service";
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {

  show: boolean = false;
  passwordVerification: string = '';
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

  onSubmit(){
    console.log("user name is " + this.user.fullName);
    this.clear();
  }
  clear(){
    this.user.fullName ="";
    this.user.email = "";
    this.user.password = "";
    this.user.age = 0;
    this.show = true;
  }


}
