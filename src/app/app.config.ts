import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
=======
>>>>>>> b23c594 (Updated CRUD features with edit, add, delete and images)
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
<<<<<<< HEAD
    provideRouter(routes),
    provideHttpClient()
=======
    provideRouter(routes)
>>>>>>> b23c594 (Updated CRUD features with edit, add, delete and images)
  ]
};