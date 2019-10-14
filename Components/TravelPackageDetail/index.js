import React, { Component } from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../store/actions/cartActions";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

//List
import travelPackages from "../TravelPackageList/list";
import CartButton from "../CartButton";

class TravelPackageDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("travelPackage").name,
      headerRight: <CartButton />
    };
  };
  state = {
    drink: "Cappuccino",
    option: "Small"
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  render() {
    const { travelPackages, loading } = this.props.travelPackageReducer;
    if (loading) return <Content />;
    const travelPackage = this.props.navigation.getParam("travelPackage");
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {travelPackage.name + "\n"}
                <Text note>{travelPackage.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: travelPackage.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button
            full
            danger
            onPress={() =>
              this.props.addItem(this.state.drink, this.state.option, 1)
            }
          >
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  travelPackageReducer: state.travelPackageReducer
});

const mapDispatchToProps = dispatch => {
  return {
    addItem: (x, y, z) => dispatch(addItemToCart(x, y, z))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TravelPackageDetail);
