import { Routes } from '@angular/router';
import { JewelryListComponent } from './components/jewelry-list/jewelry-list';
import { AddJewelryComponent } from './components/add-jewelry/add-jewelry';
import { EditJewelryComponent } from './components/edit-jewelry/edit-jewelry';

export const routes: Routes = [
  { path: '', redirectTo: 'jewelry', pathMatch: 'full' },
  { path: 'jewelry', component: JewelryListComponent },
  { path: 'jewelry/add', component: AddJewelryComponent },
  { path: 'jewelry/edit/:id', component: EditJewelryComponent },

  // Wildcard route — catches unknown paths
  { path: '**', redirectTo: 'jewelry' }
];
