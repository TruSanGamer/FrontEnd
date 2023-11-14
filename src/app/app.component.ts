import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./login/login.component";

@Component({
  imports: [CommonModule, RouterOutlet, LoginComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'FrontEnd';
}
