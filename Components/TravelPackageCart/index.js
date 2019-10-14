import React, { Component } from "react";
import { connect } from "react-redux";
import { checkoutCart } from "../../store/actions/cartActions";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

class TravelPackageCart extends Component {
  checkout = () => {
    this.props.checkoutCart();
    showMessage({
      message: "Thank you",
      description: "Looking forward for your next order",
      type: "danger"
    });
  };
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={this.checkout}>
          <Text>Checkout</Text>
        </Button>
        <FlashMessage position="top" />
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

const mapDispatchToProps = dispatch => {
  return {
    checkoutCart: () => dispatch(checkoutCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TravelPackageCart);
