import { CHANGE_THEME } from "../actions/types";
import { createMuiTheme } from "@material-ui/core/styles";

const initialState = {
  //   enable: false,
  theme: createMuiTheme({
    palette: {
      type: "light",
    },
  }),
};

// const booleanActionPayload = (payload) => {
//   if (payload) {
//     return true;
//   } else {
//     return false;
//   }
// };

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        // enable: booleanActionPayload(action.payload),
        theme: action.payload,
      };

    default:
      return state;
  }
}