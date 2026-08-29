import { Routes } from '@angular/router';
import { PersonComponent } from './people/person.component';
import { PersonDetailComponent } from './people/person-detail.component';

export const routes: Routes = [
  {
    path: 'technologies',
    loadChildren: () =>
      import('./technologies/technologies.module')
        .then((m) => m.TechnologiesModule),
  },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: PersonComponent },
  { path: 'item/:id', component: PersonDetailComponent },
];
