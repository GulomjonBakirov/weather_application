import {
  WEATHEAR_REQUEST,
  WEATHEAR_SUCCESS,
  WEATHEAR_FAIL,
} from "./weatherConstants";

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case WEATHEAR_REQUEST:
      return { ...state, loading: true };
    case WEATHEAR_SUCCESS:
      return { data: action.payload, loading: false };
    case WEATHEAR_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
