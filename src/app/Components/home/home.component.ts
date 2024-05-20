import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../Services/housing.service';
import { HousingLocation } from '../../Models/housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HousingLocationComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList;
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
