import { createAction, props } from '@ngrx/store'
import { Book } from '../services/books-api.service'

export const readNow = createAction(
  '[Favorites] Read Now',
  props<{ book: Book }>()
)
