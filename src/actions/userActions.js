import axios from "axios";
import {
  USER_LOGIN_SUCCESS,
  USER_REGISTER_RESET,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_RESET,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://rcp-backend1.herokuapp.com/api/users/login",
      { email, password },
      config
    );

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_LIST_RESET });
  dispatch({ type: USER_REGISTER_RESET });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://rcp-backend1.herokuapp.com/api/users",
      { name, email, password },
      config
    );

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
