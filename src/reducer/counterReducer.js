const prefix = '[COUNTER]';

export const actions = {
  INCREMENT: `${prefix} INCREMENT`,
  DECREMENT: `${prefix} DECREMENT`,
};


const createInitialState = () => (
  {
    counter: 0,
  });


const reducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case actions.INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case actions.DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
