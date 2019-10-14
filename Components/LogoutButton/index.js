import React, { Component } from "react";
import { Icon, View, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { logout } from "../../store/actions/authActions";

import { connect } from "react-redux";

class LogoutButton extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
            <Icon
              onPress={() => this.props.logout()}
              name="exit"
              style={{
                color: "white",
                fontSize: 30,
                width: 50,
                height: 30,
                margin: 6
              }}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};



export default withNavigation(connect(null,mapDispatchToProps)(LogoutButton));

