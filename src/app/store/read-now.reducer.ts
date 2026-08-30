import { createReducer, on } from '@ngrx/store'
import { Book } from '../services/books-api.service'
import { readNow } from './read-now.actions'

export const initialState: Book[] = []

export const readNowReducer = createReducer(
  initialState,

  on(readNow, (state, { book }) => {
    const alreadyExists = state.some(
      (currentBook) => currentBook.id === book.id
    )

    if (alreadyExists) {
      return state
    }

    return [...state, book]
  })
)
