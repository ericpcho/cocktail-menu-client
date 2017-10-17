import {API_BASE_URL} from '../config'

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

export const fetchCocktails = (filter) => dispatch => {
  dispatch(fetchCocktailsRequest);
  fetch(`${API_BASE_URL}/api/cocktails?alcohol=${filter}`)
      .then(res => {
          if (!res.ok) {
              return Promise.reject(res.statusText)
          }
          console.log(res.json())
          return res.json()
      })
      .then((cocktails) => dispatch(fetchCocktailsSuccess(cocktails)))
      .catch(error => dispatch(fetchCocktailsError(error)))
}