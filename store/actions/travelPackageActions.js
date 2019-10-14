import axios from "axios";
import * as actionTypes from "./types";

export const getTravelPackages = () => {
  return async dispatch => {
    dispatch(setTravelPackagesLoading());
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const travelPackages = res.data;
      console.log(travelPackages)
      dispatch({
        type: actionTypes.GET_TRAVELPACKAGES,
        payload: travelPackages
      });
    } catch (err) {
      console.error("Error while fetching travel packages", err);
    }
  };
};

export const setTravelPackagesLoading = () => ({
  type: actionTypes.TRAVELPACKAGES_LOADING
});
