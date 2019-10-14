import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";

import * as actionTypes from "./types";

const setAuthToken = token => {
  if (token) {
    AsyncStorage.setItem("token", token);

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    AsyncStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      const user = jwt_decode(token);

      if (user.exp >= currentTime) {
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = userData => {
  return async dispatch => {
    try {   
      console.log("Calling login function")
      const response = await axios.post(
        "http://2a857357.ngrok.io/api/login",
        userData
      );
      let user = response.data;
      console.log(response.data)
      let decodedUser = jwt_decode(user.token); 
      setAuthToken(user.token);
      await dispatch(setCurrentUser(decodedUser));
    } catch (error) {
      console.error(error)
    }
  };
};

export const signup = userData => {
  return async dispatch => {
    try {
      console.log("Calling signup function")
      let response = await axios.post(
        "http://2a857357.ngrok.io/api/register/",
        userData
      );
      let user = response.data;
      dispatch(login(userData));
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
      
    } catch (error) {
      console.error(error)
      };
    }
  };

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});