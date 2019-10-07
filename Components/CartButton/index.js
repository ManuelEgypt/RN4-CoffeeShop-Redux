import React, { Component } from "react";
import { Icon, View, Text } from "native-base";
import { withNavigation } from "react-navigation";
import IconBadge from "react-native-icon-badge";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <IconBadge
          MainElement={
            <Icon
              onPress={() => this.props.navigation.navigate("CoffeeCart")}
              name="cart"
              style={{
                color: "white",
                fontSize: 30,
                width: 50,
                height: 30,
                margin: 6
              }}
            />
          }
          BadgeElement={
            <Text style={{ color: "#FFFFFF" }}>{this.props.items.length}</Text>
          }
          IconBadgeStyle={{
            width: 20,
            height: 20,
            backgroundColor: "#FF00EE",
            left: 20
          }}
          Hidden={this.props.items.length == 0}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default withNavigation(connect(mapStateToProps)(CartButton));
