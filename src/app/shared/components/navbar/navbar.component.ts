import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule, Button } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'navbar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, Button, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  //#region SIDEBAR VISIBILITY
  public sidebarVisible = false;
  //#endregion SIDEBAR VISIBILITY
}
