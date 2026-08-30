import {
  initialState,
  readNowReducer,
} from '../app/store/read-now.reducer'

import { readNow } from '../app/store/read-now.actions'

describe('readNowReducer', () => {

  it('should start with an empty state', () => {
    expect(initialState).toEqual([])
  })

  it('should add a book when readNow is dispatched', () => {
    const book = {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
    }

    const state = readNowReducer(
      initialState,
      readNow({ book })
    )

    expect(state.length).toBe(1)
    expect(state[0]).toEqual(book)
  })

  it('should not add the same book twice', () => {
    const book = {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
    }

    const firstState = readNowReducer(
      initialState,
      readNow({ book })
    )

    const secondState = readNowReducer(
      firstState,
      readNow({ book })
    )

    expect(secondState.length).toBe(1)
    expect(secondState[0]).toEqual(book)
  })

})
