import {apiAction, staticAction} from 'src/action/actionWrappers';
import {actions} from 'src/reducer/counterReducer';
import {fetchUsers} from 'src/api/userApi';

const increment = () => dispatch => {
  dispatch(staticAction(actions.INCREMENT));
};

const decrement = () => dispatch => {
  dispatch(staticAction(actions.DECREMENT));
};

const getUsers = () => async (dispatch) => {
  const users = await dispatch(apiAction(fetchUsers));
  console.log('users', users);
};


export {
  increment,
  decrement,
  getUsers,
};
