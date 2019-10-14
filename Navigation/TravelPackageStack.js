import { createStackNavigator } from "react-navigation";

import Cart from "../Components/TravelPackageCart";
import List from "../Components/TravelPackageList";
import Detail from "../Components/TravelPackageDetail";
import Login from "../Components/Login";
import Home from "../Components/HomePage";

const TravelPackageStack = createStackNavigator(
  {
    TravelPackageList: List,
    TravelPackageDetail: Detail
  },
  {
    initialRouteName: "TravelPackageList",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default TravelPackageStack;
