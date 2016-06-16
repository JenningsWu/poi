import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

import { onGameResponseAction } from './gameinfo/action';

import { gameinfoReducer } from './gameinfo/reducer';
import { tickReducer } from './tick';
import { constReducer } from './const';

// === Utils ===

// window.listenToResponse = (path, callback) ->
//   if typeof path == 'string'
//     path = [path]
//   (state, action) ->
//     switch action.type
//       when GAME_RESPONSE
//         if action.path in path
//           result = callback(state, action)
//           return result if result
//     return state

// window.listenToRequest = (path, callback) ->
//   if typeof path == 'string'
//     path = [path]
//   (state, action) ->
//     switch action.type
//       when GAME_REQUEST
//         if action.path in path
//           result = callback(state, action)
//           return result if result
//     return state

// window.indexify = (array, key='api_id') ->
//   if typeof key == 'string'
//     keyFunc = (element) -> element[key]
//   else
//     keyFunc = key
//   result = []
//   for element in array
//     result[keyFunc(element)] = element
//   result


// # === Root reducer ===

export const reducer = reduceReducers(
  combineReducers({
    tick: tickReducer,
    const: constReducer,
    info: gameinfoReducer,
  }),
);

// # === Actions ===

export const onGameResponse = onGameResponseAction;

export const onGameRequest = (detail) => ({
  type: 'GAME_REQUEST',
  method: detail.method,
  path: detail.path,
  body: detail.body,
});
