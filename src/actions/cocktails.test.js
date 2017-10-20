import * as actions from './cocktail'; 

describe('fetchCocktailRequest', () => {
  it('should return the action', () => {
    const action = actions.fetchCocktailsRequest();
    expect(action.type).toEqual(actions.FETCH_COCKTAILS_REQUEST)
  })
});

describe('fetchCocktailSuccess', () => {
  it('should return the action', () => {
    const action = actions.fetchCocktailsSuccess();
    expect(action.type).toEqual(actions.FETCH_COCKTAILS_SUCCESS)
  })
});

describe('fetchCocktailError', () => {
  it('should return the action', () => {
    const action = actions.fetchCocktailsError();
    expect(action.type).toEqual(actions.FETCH_COCKTAILS_ERROR)
  })
});

describe('postMenuRequest', () => {
  it('should return the action', () => {
    const action = actions.postMenuRequest();
    expect(action.type).toEqual(actions.POST_MENU_REQUEST)
  })
});

describe('postMenuSuccess', () => {
  it('should return the action', () => {
    const action = actions.postMenuSuccess();
    expect(action.type).toEqual(actions.POST_MENU_SUCCESS)
  })
});

describe('postMenuError', () => {
  it('should return the action', () => {
    const action = actions.postMenuError();
    expect(action.type).toEqual(actions.POST_MENU_ERROR)
  })
});

describe('fetchMenuRequest', () => {
  it('should return the action', () => {
    const action = actions.fetchMenuRequest();
    expect(action.type).toEqual(actions.FETCH_MENU_REQUEST)
  })
});

describe('fetchMenuSuccess', () => {
  it('should return the action', () => {
    const action = actions.fetchMenuSuccess();
    expect(action.type).toEqual(actions.FETCH_MENU_SUCCESS)
  })
});

describe('fetchMenuError', () => {
  it('should return the action', () => {
    const action = actions.fetchMenuError();
    expect(action.type).toEqual(actions.FETCH_MENU_ERROR)
  })
});

describe('filterCocktails', () => {
  it('should return the action', () => {
    const action = actions.filterCocktails();
    expect(action.type).toEqual(actions.FILTER_COCKTAILS)
  })
});

describe('displayCocktail', () => {
  it('should return the action', () => {
    const action = actions.displayCocktail();
    expect(action.type).toEqual(actions.DISPLAY_COCKTAIL)
  })
});

describe('saveToMenu', () => {
  it('should return the action', () => {
    const action = actions.saveToMenu();
    expect(action.type).toEqual(actions.SAVE_TO_MENU)
  })
});

describe('returnToHome', () => {
  it('should return the action', () => {
    const action = actions.returnToHome();
    expect(action.type).toEqual(actions.RETURN_TO_HOME)
  })
});

describe('goToMenu', () => {
  it('should return the action', () => {
    const action = actions.goToMenu();
    expect(action.type).toEqual(actions.GO_TO_MENU)
  })
});

describe('deleteMenuItem', () => {
  it('should return the action', () => {
    const action = actions.deleteMenuItem();
    expect(action.type).toEqual(actions.DELETE_MENU_ITEM)
  })
});

describe('fetchMenu2Request', () => {
  it('should return the action', () => {
    const action = actions.fetchMenu2Request();
    expect(action.type).toEqual(actions.FETCH_MENU2_REQUEST)
  })
});

describe('fetchMenu2Success', () => {
  it('should return the action', () => {
    const action = actions.fetchMenu2Success();
    expect(action.type).toEqual(actions.FETCH_MENU2_SUCCESS)
  })
});

describe('fetchMenu2Error', () => {
  it('should return the action', () => {
    const action = actions.fetchMenu2Error();
    expect(action.type).toEqual(actions.FETCH_MENU2_ERROR)
  })
});