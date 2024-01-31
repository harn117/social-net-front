import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from "../../../services/auth.service";
import { PubliocationModel } from '../../../models/publication.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  /* publication: PubliocationModel = {
    _id
  } */

}
