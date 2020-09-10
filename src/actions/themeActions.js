import { CHANGE_THEME } from "./types";

/* 
This action is triggered by navbar theme menu
*/
export const changeTheme = (theme) => async (dispatch) => {
  try {
    console.log("IN THEME CHANGE ACTION");
    dispatch({
      type: CHANGE_THEME,
      payload: theme,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_THEME,
      payload: error,
    });
  }
};
