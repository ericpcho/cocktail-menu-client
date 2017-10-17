'use strict'
import * as actions from '../actions/cocktail.js'

const initialState = {
  view: 'chooseLiquor',
  alcohol: ['Whiskey', 'Rum', 'Vodka', 'Gin', 'Tequila'],
  cocktails: [],
  selectedCocktail: [],
  loading: false,
  selection: '',
  error: null
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
            selection: action.cocktails[0].alcohol
        })
    }

    else if (action.type === actions.FILTER_COCKTAILS) {
        return Object.assign({}, state, {
            view: 'chooseDrink',
            loading: false,
            error: null,
            cocktails: action.cocktails,
            selection: [state.selection, action.cocktails[0].baseLiquid]
        })
    }

    else if (action.type === actions.DISPLAY_COCKTAIL) {
        return Object.assign({}, state, {
            view: 'recipe',
            loading: false,
            error: null,
            selectedCocktail: action.selectedCocktail
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