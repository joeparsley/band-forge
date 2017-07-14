import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BandsComponent } from './bands/bands.component';
import { BandDetailComponent } from './band-detail/band-detail.component';
import { AdminComponent }   from './admin/admin.component';


const appRoutes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'bands',
  component: BandsComponent
},
{
  path: 'bands/:id',
  component: BandDetailComponent
},
{
   path: 'admin',
   component: AdminComponent
}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
