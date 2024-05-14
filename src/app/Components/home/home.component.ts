import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../Models/housinglocation';
import { HousingService } from '../../Services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HousingLocationComponent,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList
  
  housingService: HousingService = inject(HousingService);


  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
 
}



