import {apiAction, dataAction, staticAction} from 'src/action/actionWrappers';
import {fetchCharacters, fetchNextSetCharacters} from 'src/api/charactersAPI';
import {actions} from 'src/reducer/characterListingReducer';
import _ from 'lodash';

const getCharacters = () => async (dispatch) => {
  try {
    dispatch(staticAction(actions.LOADING));
    const characters = await dispatch(apiAction(fetchCharacters));
    const offset = _.get(characters, 'data.offset');
    const data = _.get(characters, 'data.results');
    dispatch(dataAction(actions.ADD_CHARACTERS, {characters: data, offset: offset}));
    dispatch(dataAction(actions.SET_OFFSET, offset));
    dispatch(staticAction(actions.LOADING_COMPLETE));
  } catch (e) {
    dispatch(staticAction(actions.ERROR));
    dispatch(staticAction(actions.LOADING_COMPLETE));
  }
};

const getNextSetOfCharacters = (offset) => async (dispatch) => {
  try {
    dispatch(staticAction(actions.LOADING));
    const newOffset = offset + 20;
    const characters = await dispatch(apiAction(fetchNextSetCharacters, newOffset));
    const updateOffSetValue = _.get(characters, 'data.offset');
    const data = _.get(characters, 'data.results');
    dispatch(dataAction(actions.ADD_CHARACTERS, {characters: data, offset: updateOffSetValue}));
    dispatch(dataAction(actions.SET_OFFSET, updateOffSetValue));
    dispatch(staticAction(actions.LOADING_COMPLETE));
  } catch (e) {
    dispatch(staticAction(actions.ERROR));
    dispatch(staticAction(actions.LOADING_COMPLETE));
  }
};



export {
  getCharacters,
  getNextSetOfCharacters,
};
