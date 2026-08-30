import { Routes } from '@angular/router';
import { PersonComponent } from './people/person.component';
import { PersonDetailComponent } from './people/person-detail.component';
import { BooksComponent } from './books/books.component'
import { SettingsComponent } from './settings/settings.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { HomeComponent } from './home/home.component'
import { NativeFeaturesComponent } from './native-features/native-features.component'
import { MapsComponent } from './maps/maps.component'

export const routes: Routes = [
  {
    path: 'technologies',
    loadChildren: () =>
      import('./technologies/technologies.module')
        .then((m) => m.TechnologiesModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'items', component: PersonComponent },
  { path: 'item/:id', component: PersonDetailComponent },
  { path: 'books',component: BooksComponent, },
  { path: 'settings', component: SettingsComponent, },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'native-features', component: NativeFeaturesComponent },
  { path: 'maps', component: MapsComponent },
];
