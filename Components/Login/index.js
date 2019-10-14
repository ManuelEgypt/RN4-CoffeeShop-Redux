import React, { Component } from "react";
import { connect } from "react-redux";


import { login } from "../../store/actions/authActions";
import { signup } from "../../store/actions/authActions";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = object => {
    this.setState(object);
  };

  handleSubmit = () => {
    this.props.login(this.state);
    this.props.navigation.navigate("Profile")
  };

  handleSubmit2 = () => {
    this.props.signup(this.state);
    this.props.navigation.navigate("TravelPackageList")
  };


  render() {
    const { username, password } = this.state;
    return(
      <Content>
        <Header transparent >
          <Text>{this.props.user?this.props.user.username:null}</Text>
          </Header>
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "white" }}>Username</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input 
                    autoCorrect={false}
                   autoCapitalize="none" 
                   name="username" 
                   value={username} 
                   placeholder="Username" 
                   onChangeText={username => this.handleChange({ username })}/>              
                </Item>
                <Body>
                  <Label style={{ color: "white" }}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                    value={password}
                    placeholder="Password"
                    name="password"
                    onChangeText={password => this.handleChange({ password })}
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            full
            success
            onPress={this.handleSubmit}
          >
            <Text>Login</Text>
          </Button>
          <Button
            full
            warning
            onPress={this.handleSubmit2}
          >
            <Text>Register</Text>
          </Button>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: userData => dispatch(login(userData)),
    signup: userData => dispatch(signup(userData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
