import { CommonModule } from '@angular/common';
import { HousingLocation } from './../../Models/housinglocation';
import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation

  constructor(private router: Router) {
  }
  
  navigateToDetailsPage(id: string) {
    this.router.navigate(['/details', id]);
}

}
