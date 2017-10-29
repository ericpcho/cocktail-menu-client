import * as actions from '../actions/cocktail.js'

const initialState = {
    view: 'home',
    alcohol: ['Whiskey', 'Rum', 'Vodka', 'Gin', 'Tequila'],
    cocktails: [],
    selectedCocktail: [],
    loading: false,
    selection: '',
    menuItems: [],
    error: null,
    id: ''
};

export const reducer = (state = initialState, action) => {

    if (action.type === actions.CHANGE_VIEW) {
        return Object.assign({}, state, {
            view: action.view
        })
    }

    else if (action.type === actions.FETCH_COCKTAILS_BY_NAME_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    }

    else if (action.type === actions.FETCH_COCKTAILS_BY_NAME_SUCCESS) {
        return Object.assign({}, state, {
            cocktails: action.cocktails,
            hasCocktail: false,
            loading: false
        })
    }

    else if (action.type === actions.FETCH_COCKTAILS_BY_ALCOHOL_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    }

    else if (action.type === actions.FETCH_COCKTAILS_BY_ALCOHOL_SUCCESS) {
        return Object.assign({}, state, {
            view: 'chooseBase',
            loading: false,
            cocktails: action.cocktails,
            selection: action.cocktails[0].alcohol
        })
    }

    else if (action.type === actions.FILTER_COCKTAILS_BY_BASE) {
        return Object.assign({}, state, {
            view: 'chooseDrink',
            cocktails: action.cocktails,
            selection: [state.selection, action.selection]
        })
    }

    else if (action.type === actions.DISPLAY_RECIPE) {
        return Object.assign({}, state, {
            view: 'recipe',
            selectedCocktail: action.selectedCocktail,
        })
    }

    else if (action.type === actions.DISPLAY_SEARCHED_RECIPE) {
        return Object.assign({}, state, {
            selectedCocktail: action.selectedCocktail,
            hasCocktail: true
        })
    }

    else if (action.type === actions.SAVE_TO_MENU) {
        return Object.assign({}, state, {
            menuItems: [...state.menuItems, state.selectedCocktail[0]]
        })
    }

    else if (action.type === actions.RETURN_TO_HOME) {
        return Object.assign({}, state, {
            view: 'home',
            cocktails: [],
            selectedCocktail: [],
            selection: '',
            hasCocktail: false
        })
    }

    else if (action.type === actions.GO_TO_MENU) {
        return Object.assign({}, state, {
            view: 'menu',
        })
    }

    else if (action.type === actions.DELETE_MENU_ITEM) {
        return Object.assign({}, state, {
            menuItems: action.updatedMenu
        })
    }

    else if (action.type === actions.FETCH_COCKTAILS_BY_ALCOHOL_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
    }

    else if (action.type === actions.POST_MENU_SUCCESS) {
        return Object.assign({}, state, {
            id: action.menu._id
        })
    }

    else if (action.type === actions.FETCH_MENU_SUCCESS) {
        return Object.assign({}, state, {
            view: "sharedMenu",
            menuItems: action.menu
        })
    }

    return state
}