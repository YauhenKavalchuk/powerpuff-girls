import { RECEIVE_API_DETAILS, RECEIVE_API_EPISODES } from '../actions';

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DETAILS:
      return {
        ...state,
        details: data,
      };
    case RECEIVE_API_EPISODES:
      return {
        ...state,
        episodes: data,
      };
    default:
      return state;
  }
};
