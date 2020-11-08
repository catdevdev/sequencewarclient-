import { combineReducers } from 'redux';

import { appReducer } from './app';
import { roomReducer } from './room';
import { roomsReducer } from './rooms';
import { userReducer } from './user';
import { usersReducer } from './users';
import { chatReducer } from './chat';
import { modalsReducer } from './modals';

export const rootReducer = combineReducers({
  // app: appReducer,
  room: roomReducer,
  rooms: roomsReducer,
  user: userReducer,
  users: usersReducer,
  chat: chatReducer,
  modals: modalsReducer,
});