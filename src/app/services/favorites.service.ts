import { Injectable } from '@angular/core'
import { ApplicationSettings } from '@nativescript/core'
import { Book } from './books-api.service'

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly FAVORITES_KEY = 'favorites'

  getFavorites(): Book[] {
    const storedFavorites = ApplicationSettings.getString(
      this.FAVORITES_KEY,
      '[]'
    )

    return JSON.parse(storedFavorites)
  }

  addFavorite(book: Book): void {
    const favorites = this.getFavorites()

    const alreadyExists = favorites.some(
      (favorite) => favorite.id === book.id
    )

    if (alreadyExists) {
      return
    }

    favorites.push(book)

    ApplicationSettings.setString(
      this.FAVORITES_KEY,
      JSON.stringify(favorites)
    )
  }
}
