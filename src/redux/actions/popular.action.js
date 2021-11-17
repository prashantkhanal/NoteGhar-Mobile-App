import axios from "../../config";
import { PopularConstant } from "../constants";

export const popularAction = () => {
  return async (dispatch) => {
    dispatch({ type: PopularConstant.POPULAR_REQUEST });
    var res;
    try {
      res = await axios.get("/popular_notes");
      const { data } = res.data;
      dispatch({
        type: PopularConstant.POPULAR_SUCCESS,
        payload: {
          data,
        },
      });
    } catch (error) {}
  };
};
