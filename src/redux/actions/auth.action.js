import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../../config";
import { LoginConstant, LogoutContant } from "../constants";

export const loginAction = (uservalue) => {
  return async (dispatch) => {
    dispatch({ type: LoginConstant.LOGIN_REQUEST });
    // Api call
    // Declearing the vairablePauth
    var res;
    try {
      res = await axios.post("/login", uservalue);
      const { token, user } = res.data;

      // const { t, data } = res.data;
      const accessToken = JSON.stringify(token);
      const userData = JSON.stringify(user);
      await AsyncStorage.multiSet([
        ["accessToken", accessToken],
        ["userData", userData],
      ]);
      dispatch({
        type: LoginConstant.LOGIN_SUCCESS,
        payload: {
          accessToken,
          userData,
        },
      });
    } catch (error) {
      if (error.response.status === 401) {
        dispatch({
          type: LoginConstant.LOGIN_FAILED,
          payload: {
            error: error.response.data.message,
          },
        });
      } else {
        dispatch({
          type: LoginConstant.LOGIN_FAILED,
          payload: {
            eroor:
              "Something went wrong. Please Check your internet connection",
          },
        });
      }
    }
  };
};

export const isUserLogin = () => {
  return async (dispatch) => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    if (accessToken) {
      const data = await AsyncStorage.getItem("userData");
      dispatch({
        type: LoginConstant.LOGIN_SUCCESS,
        payload: {
          data,
          accessToken,
        },
      });
    }
  };
};

export const logOutAction = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: LogoutContant,
    });
  };
};
