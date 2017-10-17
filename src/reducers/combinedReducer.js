'use strict'
import * as actions from '../actions/cocktail.js'

const initialState = {
  view: 'chooseLiquor',
  alcohol: ['Whisky', 'Rum', 'Vodka', 'Gin', 'Tequila'],
  cocktails: [],
  loading: false,
  selection: "",
  error: null,
  bases: []
};

export const combinedReducer = (state=initialState, action) => {

    if (action.type === actions.FETCH_COCKTAILS_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    }

    else if (action.type === actions.FETCH_COCKTAILS_SUCCESS) {
        return Object.assign({}, state, {
            view: 'chooseBase',
            loading: false,
            error: null,
            cocktails: action.cocktails,
        })
    }

    else if (action.type === actions.FETCH_COCKTAILS_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
  return state
}