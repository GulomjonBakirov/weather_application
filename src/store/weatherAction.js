import {
  WEATHEAR_REQUEST,
  WEATHEAR_SUCCESS,
  WEATHEAR_FAIL,
} from "./weatherConstants";
import axios from "axios";

export const getWeatherData = (city) => async (dispatch) => {
  try {
    dispatch({ type: WEATHEAR_REQUEST });
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_ID}&q=${city}&days=1&aqi=no&alerts=no`
    );
    dispatch({
      type: WEATHEAR_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: WEATHEAR_FAIL,
      payload: err,
    });
  }
};
