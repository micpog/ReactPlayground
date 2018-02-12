import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';
import AuthorReducer from './reducer_author';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
  author: AuthorReducer
});

export default rootReducer;
