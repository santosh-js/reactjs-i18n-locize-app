import { FETCH_LOCATION } from "./types";

/*
This action is triggered by blogs component
*/
export const getLocation = (location) => async (dispatch) => {
  try {
    console.log("LOCATION FETCH IN PROGRESS");
    dispatch({
      type: FETCH_LOCATION,
      payload: location,
    });
  } catch (error) {
    dispatch({
      type: FETCH_LOCATION,
      payload: error,
    });
  }
};
