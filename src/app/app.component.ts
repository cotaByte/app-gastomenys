import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponentComponent } from './auth/component/auth-component/auth-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-gastomenys';
}
