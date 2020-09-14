import { FETCH_LOCATION } from "../actions/types";

const initialState = {
  location: { ipv4: null, long: null, lat: null, city: null },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
}
