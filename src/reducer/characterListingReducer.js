const prefix = '[CHARACTER]';

export const actions = {
  ADD_CHARACTERS: `${prefix} ADD_CHARACTERS`,
  SET_OFFSET: `${prefix} SET_OFFSET`,
  LOADING: `${prefix} LOADING`,
  LOADING_COMPLETE: `${prefix} LOADING_COMPLETE`,
  ERROR: `${prefix} ERROR`,
  SET_SEARCH_STATE: `${prefix} SET_SEARCH_STATE`,
  SET_SEARCH_STRING: `${prefix} SET_SEARCH_STRING`,
};


const createInitialState = () => (
  {
    characters: [],
    singleCharacter: {},
    isLoading: false,
    isError: false,
    offset: 0,
    isSearchActive: false,
    searchString: '',
  });


const reducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case actions.ADD_CHARACTERS: {
      return {
        ...state,
        characters: action.payload.offset === state.offset ? [...state.characters] : [...state.characters, ...action.payload.characters],
      };
    }
    case actions.SET_OFFSET: {
      return {
        ...state,
        offset: action.payload,
      };
    }
    case actions.LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case actions.LOADING_COMPLETE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actions.ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case actions.SET_SEARCH_STATE: {
      return {
        ...state,
        isSearchActive: action.payload,
        searchString: '',
        characters: [],
        offset: 0,
      };
    }
    case actions.SET_SEARCH_STRING: {
      return {
        ...state,
        searchString: action.payload,
        characters: [],
        offset: 0,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
