import {INCREMENT, DECREMENT} from './actionTypes';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementAsync = () => (dispatch, getState) => {
  setTimeout(() => {
    console.log(getState());
    dispatch(increment());
    console.log(getState());
  }, 1000);
};
