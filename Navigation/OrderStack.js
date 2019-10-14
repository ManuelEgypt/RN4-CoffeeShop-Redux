import { createStackNavigator, createAppContainer } from "react-navigation";

import Cart from "../Components/TravelPackageCart";
import OrderHistory from "../Components/OrderHistory";
import List from "../Components/TravelPackageList";
import Detail from "../Components/TravelPackageDetail";
import Login from "../Components/Login";
import Home from "../Components/HomePage";

const OrderStack = createStackNavigator(
  {
    TravelPackageCart: Cart,
    OrderHistory: OrderHistory
  },
  {
    initialRouteName: "TravelPackageCart",
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

export default OrderStack;
