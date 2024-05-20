import { HousingLocation } from './../../Models/housinglocation';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { HousingService } from '../../Services/housing.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
      this.housingLocationId = Number(this.route.snapshot.params['id']);
      this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}
