import { Injectable } from '@angular/core'
import { openOrCreate } from '@nativescript-community/sqlite'

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private db = openOrCreate('books.db')

  constructor() {
    this.db.execute(`
      CREATE TABLE IF NOT EXISTS favorites (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        author TEXT NOT NULL
      )
    `)
  }

  getDatabase() {
    return this.db
  }
}
