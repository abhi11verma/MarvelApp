import {apiAction, dataAction, staticAction} from 'src/action/actionWrappers';
import {fetchCharactersByName} from 'src/api/charactersAPI';
import {actions} from 'src/reducer/characterListingReducer';
import _ from 'lodash';

const getCharacters = () => async (dispatch, getState) => {

  const {characters} = await getState();
  const {offset, searchString, isSearchActive} = characters;
  const prevOffSet = offset;
  try {
    dispatch(staticAction(actions.LOADING));
    let params = '';
    if (isSearchActive) {
      params = `nameStartsWith=${searchString}&offset=${prevOffSet}`;
    } else {
      params = `offset=${prevOffSet}`;
    }
    const characters = await dispatch(apiAction(fetchCharactersByName, params));
    const count = _.get(characters, 'data.count');
    if (count !== 0)//End not reached
    {
      const updateOffSetValue = _.get(characters, 'data.offset');
      const newOffset = updateOffSetValue + 20;
      const data = _.get(characters, 'data.results');
      dispatch(dataAction(actions.ADD_CHARACTERS, {characters: data, offset: newOffset}));
      dispatch(dataAction(actions.SET_OFFSET, newOffset));
    }
    dispatch(staticAction(actions.LOADING_COMPLETE));
  } catch (e) {
    dispatch(staticAction(actions.ERROR));
    dispatch(staticAction(actions.LOADING_COMPLETE));
  }
};

const searchBarState = (state) => dispatch => {
  dispatch(dataAction(actions.SET_SEARCH_STATE, state));
  !state && dispatch(getCharacters());
};

const searchCharactersByName = (name) => async (dispatch) => {
  dispatch(dataAction(actions.SET_SEARCH_STRING, name));
  dispatch(getCharacters());
};

export {
  getCharacters,
  searchBarState,
  searchCharactersByName,
};
