import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import travelPackages from "./list";

// Component
import TravelPackageItem from "./TravelPackageItem";
import CartButton from "../CartButton";

class TravelPackageList extends Component {
  static navigationOptions = {
    title: "TravelPackage List",
    headerRight: <CartButton />
  };

  render() {
    const { travelPackages, loading } = this.props.travelPackageReducer;
    let p;

    if (loading) {
      return <Spinner />;
    }
    p = travelPackages.map(travelPackage => (
      <TravelPackageItem travelPackage={travelPackage} key={travelPackage.id} />
    ));

    return (
      <Content>
        <List>{p}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  travelPackageReducer: state.travelPackageReducer
});

export default connect(mapStateToProps)(TravelPackageList);
