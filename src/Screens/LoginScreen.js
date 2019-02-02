import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, NavigationActions, withNavigation } from 'react-navigation'; // Version can be specified in package.json

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: '로그인',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Login Screen
          Login Success
        </Text>

        <Button
          title="Go to Main"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}

export default withNavigation(LoginScreen);