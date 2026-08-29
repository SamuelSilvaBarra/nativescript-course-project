import { Injectable, inject } from '@angular/core'
import { Book } from './books-api.service'
import { DatabaseService } from './database.service'

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private databaseService = inject(DatabaseService)
  private db = this.databaseService.getDatabase()

  async getFavorites(): Promise<Book[]> {
    return await this.db.select(
      'SELECT id, title, author FROM favorites'
    ) as Book[]
  }

  async addFavorite(book: Book): Promise<void> {
    console.log('Saving favorite:', book)

    await this.db.execute(
      `INSERT OR IGNORE INTO favorites (id, title, author)
       VALUES (?, ?, ?)`,
      [book.id, book.title, book.author]
    )

    const rows = await this.db.select(
      'SELECT id, title, author FROM favorites'
    )

    console.log('Favorites after INSERT:', rows)
  }
}
