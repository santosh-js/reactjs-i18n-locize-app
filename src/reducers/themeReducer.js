import { CHANGE_THEME } from "../actions/types";
import { createMuiTheme } from "@material-ui/core/styles";

const initialState = {
  //   enable: false,
  // theme: {
  //   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  // },
  theme: createMuiTheme({
    // breakpoints: {
    //   values: {
    //     tablet: 640,
    //     laptop: 1024,
    //     desktop: 1280,
    //   },
    // },
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
