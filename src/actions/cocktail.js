import { API_BASE_URL } from "../config";

// Get Cocktails - Fetch by Alcohol
export const FETCH_COCKTAILS_BY_ALCOHOL_REQUEST =
  "FETCH_COCKTAILS_BY_ALCOHOL_REQUEST";
export const fetchCocktailsByAlcoholRequest = () => ({
  type: FETCH_COCKTAILS_BY_ALCOHOL_REQUEST
});

export const FETCH_COCKTAILS_BY_ALCOHOL_SUCCESS =
  "FETCH_COCKTAILS_BY_ALCOHOL_SUCCESS";
export const fetchCocktailsByAlcoholSuccess = cocktails => ({
  type: FETCH_COCKTAILS_BY_ALCOHOL_SUCCESS,
  cocktails
});

export const FETCH_COCKTAILS_BY_ALCOHOL_ERROR =
  "FETCH_COCKTAILS_BY_ALCOHOL_ERROR";
export const fetchCocktailsByAlcoholError = error => ({
  type: FETCH_COCKTAILS_BY_ALCOHOL_ERROR,
  error
});

export const fetchCocktailsByAlcohol = alcohol => dispatch => {
  dispatch(fetchCocktailsByAlcoholRequest());
  fetch(`${API_BASE_URL}/api/cocktails?alcohol=${alcohol}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cocktails => dispatch(fetchCocktailsByAlcoholSuccess(cocktails)))
    .catch(error => dispatch(fetchCocktailsByAlcoholError(error)));
};

// Get Cocktails - Fetch by Name
export const FETCH_COCKTAILS_BY_NAME_REQUEST =
  "FETCH_COCKTAILS_BY_NAME_REQUEST";
export const fetchCocktailsByNameRequest = () => ({
  type: FETCH_COCKTAILS_BY_NAME_REQUEST
});

export const FETCH_COCKTAILS_BY_NAME_SUCCESS =
  "FETCH_COCKTAILS_BY_NAME_SUCCESS";
export const fetchCocktailsByNameSuccess = cocktails => ({
  type: FETCH_COCKTAILS_BY_NAME_SUCCESS,
  cocktails
});

export const FETCH_COCKTAILS_BY_NAME_ERROR = "FETCH_COCKTAILS_BY_NAME_ERROR";
export const fetchCocktailsByNameError = error => ({
  type: FETCH_COCKTAILS_BY_NAME_ERROR,
  error
});

export const fetchCocktailsByName = cocktailName => dispatch => {
  dispatch(fetchCocktailsByNameRequest());
  fetch(`${API_BASE_URL}/api/cocktails?cocktailName=${cocktailName}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cocktails => dispatch(fetchCocktailsByNameSuccess(cocktails)))
    .catch(error => dispatch(fetchCocktailsByNameError(error)));
};

// Post Menu
export const POST_MENU_REQUEST = "POST_MENU_REQUEST";
export const postMenuRequest = () => ({
  type: POST_MENU_REQUEST
});

export const POST_MENU_SUCCESS = "POST_MENU_SUCCESS";
export const postMenuSuccess = menu => ({
  type: POST_MENU_SUCCESS,
  menu
});

export const POST_MENU_ERROR = "POST_MENU_ERROR";
export const postMenuError = error => ({
  type: POST_MENU_ERROR,
  error
});

export const postMenu = state => dispatch => {
  dispatch(postMenuRequest);
  return fetch(`${API_BASE_URL}/api/menus`, {
    method: "post",
    body: JSON.stringify({ menuItems: state }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(menu => {
      return dispatch(postMenuSuccess(menu));
    })
    .catch(error => dispatch(postMenuError(error)));
};

// Get Menu ID
export const FETCH_MENU_ID_REQUEST = "FETCH_MENU_ID_REQUEST";
export const fetchMenuIdRequest = () => ({
  type: FETCH_MENU_ID_REQUEST
});

export const FETCH_MENU_ID_SUCCESS = "FETCH_MENU_ID_SUCCESS";
export const fetchMenuIdSuccess = menu => ({
  type: FETCH_MENU_ID_SUCCESS,
  menu
});

export const FETCH_MENU_ID_ERROR = "FETCH_MENU_ID_ERROR";
export const fetchMenuIdError = error => ({
  type: FETCH_MENU_ID_ERROR,
  error
});

export const fetchMenuId = id => dispatch => {
  dispatch(fetchMenuIdRequest);
  fetch(`${API_BASE_URL}/api/menus/${id}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      window.open(`http://cocktails.netlify.com/${id}`);
    })
    .then(menu => {
      return dispatch(fetchMenuIdSuccess(menu));
    })
    .catch(error => dispatch(fetchMenuIdError(error)));
};

//State Change Actions
export const CHANGE_VIEW = "CHANGE_VIEW";
export const changeView = view => ({
  type: CHANGE_VIEW,
  view
});

export const FILTER_COCKTAILS_BY_BASE = "FILTER_COCKTAILS_BY_BASE";
export const filterCocktailsByBase = (filter, selection) => ({
  type: FILTER_COCKTAILS_BY_BASE,
  cocktails: filter,
  selection
});

export const DISPLAY_RECIPE = "DISPLAY_RECIPE";
export const displayRecipe = selection => ({
  type: DISPLAY_RECIPE,
  selectedCocktail: selection
});

export const DISPLAY_SEARCHED_RECIPE = "DISPLAY_SEARCHED_RECIPE";
export const displaySearchedRecipe = selection => ({
  type: DISPLAY_SEARCHED_RECIPE,
  selectedCocktail: selection
});

export const SAVE_TO_MENU = "SAVE_TO_MENU";
export const saveToMenu = () => ({
  type: SAVE_TO_MENU
});

export const RETURN_TO_HOME = "RETURN_TO_HOME";
export const returnToHome = () => ({
  type: RETURN_TO_HOME
});

export const GO_TO_MENU = "GO_TO_MENU";
export const goToMenu = () => ({
  type: GO_TO_MENU
});

export const DELETE_MENU_ITEM = "DELETE_MENU_ITEM";
export const deleteMenuItem = updatedMenu => ({
  type: DELETE_MENU_ITEM,
  updatedMenu
});

// Get Menu
export const fetchMenu = id => dispatch => {
  dispatch(fetchMenuRequest);
  fetch(`${API_BASE_URL}/api/menus/${id}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(res => {
      return dispatch(fetchMenuSuccess(res.menuItems));
    })
    .catch(error => dispatch(fetchMenuError(error)));
};

export const FETCH_MENU_REQUEST = "FETCH_MENU_REQUEST";
export const fetchMenuRequest = () => ({
  type: FETCH_MENU_REQUEST
});

export const FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS";
export const fetchMenuSuccess = menu => ({
  type: FETCH_MENU_SUCCESS,
  menu
});

export const FETCH_MENU_ERROR = "FETCH_MENU_ERROR";
export const fetchMenuError = error => ({
  type: FETCH_MENU_ERROR,
  error
});
