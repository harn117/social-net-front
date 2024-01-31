import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthService } from 'src/app/services/auth.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  showToolBar = true;
  title = 'Inicio';
  openSidebar = false;
  role!: number;
  validateData: any = {};
  private userData!: any;
  userOrganizationData!: any;

  public sizeDisplay: string = 'phone' || 'web';


  logo: any;
  logoUnload: boolean = false;
  fileQuery: any = { limit: 0, page: 0, cache: false }; //Query para pasar al endpoint
  fileOrg: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {
    this.showToolBar = this.authService.tokenExists();
  }
   

  logout(): void {
        this.authService.logout();
    }

       

}
