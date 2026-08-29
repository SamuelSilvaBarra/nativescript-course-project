import { Injectable, inject } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { API_BASE_URL } from '../core/api.config'

export interface Book {
  id: number
  title: string
  author: string
}

@Injectable({
  providedIn: 'root',
})
export class BooksApiService {
  private http = inject(HttpClient)

  searchBooks(query: string): Observable<Book[]> {
    const params = new HttpParams().set('q', query)

    return this.http.get<Book[]>(
      `${API_BASE_URL}/api/books`,
      { params }
    )
  }
}
