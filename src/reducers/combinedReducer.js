'use strict'

const initialState = {
  view: 'chooseDrink',
  alcohol: ['Whiskey', 'Rum', 'Vodka', 'Gin', 'Tequila'],
  bases: ['Club soda', 'Lemon juice', 'Ginger ale']
};

export const combinedReducer = (state=initialState) => {
  return state
}