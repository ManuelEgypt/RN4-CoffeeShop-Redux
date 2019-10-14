import * as actionTypes from "../actions/types";

const initialState = {
  travelPackages: [],
  loading: true
};

const travelPackageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TRAVELPACKAGES:
      return {
        ...state,
        travelPackages: action.payload,
        loading: false
      };
    case actionTypes.TRAVELPACKAGES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default travelPackageReducer;
