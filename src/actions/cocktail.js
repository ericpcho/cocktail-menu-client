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
    dispatch(fetchCocktailsRequest());
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
    return fetch(`${API_BASE_URL}/api/menus`, {
        method: 'post',
        body: JSON.stringify({menuItems: state}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText)
        }
        return res.json()
    })
    .then((menu) => {
        return dispatch(postMenuSuccess(menu));
    })
    .catch(error => dispatch(postMenuError(error)))
}

// Get Menu ID
export const FETCH_MENU_ID_REQUEST = 'FETCH_MENU_ID_REQUEST';
export const fetchMenuIdRequest = () => ({
    type: FETCH_MENU_ID_REQUEST
})

export const FETCH_MENU_ID_SUCCESS = 'FETCH_MENU_ID_SUCCESS';
export const fetchMenuIdSuccess = (menu) => ({
    type: FETCH_MENU_ID_SUCCESS,
    menu
})

export const FETCH_MENU_ID_ERROR = 'FETCH_MENU_ID_ERROR';
export const fetchMenuIdError = (error) => ({
    type: FETCH_MENU_ID_ERROR,
    error
})

export const fetchMenuId = (id) => dispatch => {
    dispatch(fetchMenuIdRequest);
    fetch(`${API_BASE_URL}/api/menus/${id}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText)
        }
        window.open(`http://taxi-driver-kangaroo-18524.netlify.com/${id}`)
    })
    .then((menu) => {
        return dispatch(fetchMenuIdSuccess(menu))
    })
    .catch(error => dispatch(fetchMenuIdError(error)))
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

// Get Menu
export const fetchMenu = (id) => dispatch => {
    dispatch(fetchMenuRequest);
    fetch(`${API_BASE_URL}/api/menus/${id}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText)
        }
        return res.json()
    })
    .then((res) => {
        console.log(res)
        return dispatch(fetchMenuSuccess(res.menuItems))
    })
    .catch(error => dispatch(fetchMenuError(error)))
  }

  export const FETCH_MENU_REQUEST = 'FETCH_MENU_REQUEST';
  export const fetchMenuRequest = () => ({
      type: FETCH_MENU_REQUEST
  })
  
  export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
  export const fetchMenuSuccess = (menu) => ({
      type: FETCH_MENU_SUCCESS,
      menu
  })
  
  export const FETCH_MENU_ERROR = 'FETCH_MENU_ERROR';
  export const fetchMenuError = (error) => ({
      type: FETCH_MENU_ERROR,
      error
  })