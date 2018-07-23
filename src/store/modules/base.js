import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const ANIMATION_DONE = 'base/ANIMATION_DONE';

export const actionCreators = {
  animationDone: createAction(ANIMATION_DONE),
};

const initialState = {
  loading: false,
};

const reducer = handleActions({
  [ANIMATION_DONE]: state => produce(state, (draft) => {
    console.log('ANIMATION_DONE')
    draft.loading = true;
  }),
}, initialState);

export default reducer;