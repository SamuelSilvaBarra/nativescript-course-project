import { Component, inject } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { FavoritesService } from '../services/favorites.service'
import { Book } from '../services/books-api.service'
import { Store } from '@ngrx/store'
import { readNow } from '../store/read-now.actions'

@Component({
  selector: 'ns-favorites',
  templateUrl: './favorites.component.html',
  standalone: true,
  imports: [NativeScriptCommonModule],
})
export class FavoritesComponent {
  private favoritesService = inject(FavoritesService)
  private store = inject(Store)

  readNow(book: Book): void {
    this.store.dispatch(readNow({ book }))
  }
  favorites: Book[] = []

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites()
  }
}
