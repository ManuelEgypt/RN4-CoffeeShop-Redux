import React, { Component } from "react";
import { Text, View } from "native-base";

import LogoutButton from "../LogoutButton";

export default class index extends Component {
  static navigationOptions = {
    title: " Profile",
    headerLeft: null,
    headerRight:<LogoutButton/>
  };
  render() {
    return (
      <View>
        <Text>PROFILE PAGE</Text>
      </View>
    );
  }
}
