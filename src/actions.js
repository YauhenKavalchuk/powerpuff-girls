export const REQUEST_API_DETAILS = "REQUEST_API_DETAILS";
export const RECEIVE_API_DETAILS = "RECEIVE_API_DETAILS";
export const REQUEST_API_EPISODES = "REQUEST_API_EPISODES";
export const RECEIVE_API_EPISODES = "RECEIVE_API_EPISODES";

export const requestApiDetails = id => ({ type: REQUEST_API_DETAILS, id });
export const receiveApiDetails = data => ({ type: RECEIVE_API_DETAILS, data });
export const requestApiEpisodes = id => ({ type: REQUEST_API_EPISODES, id });
export const receiveApiEpisodes = data => ({ type: RECEIVE_API_EPISODES, data });