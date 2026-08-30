import { Component, inject } from '@angular/core'
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
} from '@nativescript/angular'
import { BooksApiService, Book } from '../services/books-api.service'
import { FavoritesService } from '../services/favorites.service'

@Component({
  selector: 'ns-books',
  templateUrl: './books.component.html',
  standalone: true,
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
  ],
})
export class BooksComponent {
  private booksApi = inject(BooksApiService)
  private favoritesService = inject(FavoritesService)

  saveFavorite(book: Book): void {
    this.favoritesService.addFavorite(book)
  }

  searchText = ''
  books: Book[] = []

  search(): void {
    this.booksApi.searchBooks(this.searchText).subscribe({
      next: (books) => {
        this.books = books
      },
      error: (error) => {
        console.error('Error searching books:', error)
      },
    })
  }
}
