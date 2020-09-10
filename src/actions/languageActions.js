import { CHANGE_LANGUAGE } from "./types";

/* 
This action is triggered by navbar language menu
*/
export const changeTheme = (language) => async (dispatch) => {
  try {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: language,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: error,
    });
  }
};
