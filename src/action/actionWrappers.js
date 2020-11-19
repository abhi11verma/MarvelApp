export const staticAction = (type) => (dispatch) => dispatch({type});

export const dataAction = (type, payload) => (dispatch) => dispatch({type, payload});

export const apiAction = (fn, ...args) => async(dispatch, getState) => {
  const {auth} = getState();
  return await fn(...args, auth);
};
