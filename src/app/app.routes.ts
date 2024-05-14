import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';
import { HousingLocationComponent } from './Components/housing-location/housing-location.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        title:"Main Page",
    },
    {
        path:"details/:id",
        component:DetailsComponent,
        title:"Home Details",
    },

];
