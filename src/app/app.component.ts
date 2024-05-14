import { Component } from '@angular/core';
import { RouterOutlet,RouterModule, RouterLink } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApp';
}
