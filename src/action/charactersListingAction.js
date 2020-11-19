import {apiAction, dataAction, staticAction} from 'src/action/actionWrappers';
import {fetchCharacters} from 'src/api/charactersAPI';
import {actions} from 'src/reducer/characterListingReducer';
import _ from 'lodash';

const getCharacters = () => async (dispatch) => {
  try {
    dispatch(staticAction(actions.LOADING));
    const characters = await dispatch(apiAction(fetchCharacters));
    dispatch(dataAction(actions.ADD_CHARACTERS, _.get(characters, 'data.results')));
    dispatch(staticAction(actions.LOADING_COMPLETE));
  } catch (e) {
    dispatch(staticAction(actions.ERROR));
  }
};


export {
  getCharacters,
};
