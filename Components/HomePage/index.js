import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components


// Actions
import { getTravelPackages } from "../../store/actions/travelPackageActions";
import AppContainer from "../../Navigation";

class HomePage extends Component {
  componentDidMount() {
    this.props.getTravelPackages();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <AppContainer />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getTravelPackages: () => dispatch(getTravelPackages())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
