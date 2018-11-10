import { AboutComponent } from './components/about/about.component';
import { AllheroesComponent } from './components/allheroes/allheroes.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'allheroes', component: AllheroesComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full' , redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


