import {API_BASE_URL} from '../config'

// Get Cocktails
export const FETCH_COCKTAILS_REQUEST = 'FETCH_COCKTAILS_REQUEST';
export const fetchCocktailsRequest = () => ({
    type: FETCH_COCKTAILS_REQUEST
})

export const FETCH_COCKTAILS_SUCCESS = 'FETCH_COCKTAILS_SUCCESS';
export const fetchCocktailsSuccess = (cocktails) => ({
    type: FETCH_COCKTAILS_SUCCESS,
    cocktails
})

export const FETCH_COCKTAILS_ERROR = 'FETCH_COCKTAILS_ERROR';
export const fetchCocktailsError = (error) => ({
    type: FETCH_COCKTAILS_ERROR,
    error
})

export const fetchCocktails = (alcohol) => dispatch => {
    dispatch(fetchCocktailsRequest);
    fetch(`${API_BASE_URL}/api/cocktails?alcohol=${alcohol}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText)
        }
        return res.json()
    })
    .then((cocktails) => dispatch(fetchCocktailsSuccess(cocktails)))
    .catch(error => dispatch(fetchCocktailsError(error)))
  }

// Post Menu
export const POST_MENU_REQUEST = 'POST_MENU_REQUEST';
export const postMenuRequest = () => ({
    type: POST_MENU_REQUEST
})

export const POST_MENU_SUCCESS = 'POST_MENU_SUCCESS';
export const postMenuSuccess = (menu) => ({
    type: POST_MENU_SUCCESS,
    menu
})

export const POST_MENU_ERROR = 'POST_MENU_ERROR';
export const postMenuError = (error) => ({
    type: POST_MENU_ERROR,
    error
})

export const postMenu = (state) => dispatch => {
    dispatch(postMenuRequest);
    fetch(`${API_BASE_URL}/api/menu`, {
        method: 'post',
        body: state
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText)
        }
        return res.json()
    })
    .then((menu) => dispatch(postMenuSuccess(menu)))
    .catch(error => dispatch(postMenuError(error)))
}


//State Change Actions
export const FILTER_COCKTAILS = 'FILTER_COCKTAILS';
export const filterCocktails = (selection) => ({
    type: FILTER_COCKTAILS,
    cocktails: selection
})

export const DISPLAY_COCKTAIL = 'DISPLAY_COCKTAIL';
export const displayCocktail = (selection) => ({
    type: DISPLAY_COCKTAIL,
    selectedCocktail: selection
})

export const SAVE_TO_MENU = 'SAVE_TO_MENU';
export const saveToMenu = () => ({
    type: SAVE_TO_MENU
})

export const RETURN_TO_HOME = 'RETURN_TO_HOME';
export const returnToHome = () => ({
    type: RETURN_TO_HOME,
})

export const GO_TO_MENU = 'GO_TO_MENU';
export const goToMenu = () => ({
    type: GO_TO_MENU,
})

export const DELETE_MENU_ITEM = 'DELETE_MENU_ITEM';
export const deleteMenuItem = (updatedMenu) => ({
    type: DELETE_MENU_ITEM,
    updatedMenu
})