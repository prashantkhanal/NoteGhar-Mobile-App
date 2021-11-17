import { PopularConstant } from "../constants";

const intiState = {
  data: [],

  loading: false,
  error: false,
};

export default (state = intiState, { type, payload }) => {
  switch (type) {
    case PopularConstant.POPULAR_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case PopularConstant.POPULAR_SUCCESS:
      state = {
        ...state,
        data: payload.data,
      };
      break;
    // case PopularConstant.LOGIN_FAILED:
    //   state = {
    //     ...state,
    //     error: payload.error,
    //     authenticating: false,
    //   };
    //   break;
  }
  return state;
};
