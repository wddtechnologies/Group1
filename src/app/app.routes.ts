import { Routes } from '@angular/router';
// import { JewelryListComponent } from './components/jewelry-list/jewelry-list';
import { EditJewelry } from './components/edit-jewelry/edit-jewelry';
import { AddJewelry } from './components/add-jewelry/add-jewelry';


export const routes: Routes = [
{ path: '', redirectTo: 'jewelry', pathMatch: 'full' },
// { path: 'jewelry', component: JewelryListComponent },
{ path: 'jewelry/add', component: AddJewelry },
{ path: 'jewelry/edit/:id', component: EditJewelry },

// wildcard route for a safeguard against sneaky paths 
{ path: '**', redirectTo: 'jewelry'}

];
