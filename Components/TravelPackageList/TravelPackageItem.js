import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

class TravelPackageItem extends Component {
  handlePress = () => {
    alert("Pressed");
  };
  render() {
    const { travelPackage } = this.props;
    return (
      <ImageBackground
        source={{ uri: travelPackage.background }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem
          button
          style={styles.listitem}
          onPress={() =>
            this.props.navigation.navigate("TravelPackageDetail", {
              travelPackage: travelPackage
            })
          }
        >
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  bordered
                  source={{ uri: travelPackage.img }}
                  style={styles.thumbnail}
                />
                <Text style={styles.text}>{travelPackage.name}</Text>
                <Text note style={styles.text}>
                  {travelPackage.distance}
                </Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </ImageBackground>
    );
  }
}

export default withNavigation(TravelPackageItem);
