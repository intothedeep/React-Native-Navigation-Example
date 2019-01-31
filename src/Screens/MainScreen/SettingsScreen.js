import React from 'react';
import { View, Text, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View>
            <Text>
                세팅스 스크린 this will be modal 
                or 
                switch tab navigator
            </Text>
        </View>
    );
  }
}
