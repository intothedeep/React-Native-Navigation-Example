import React from 'react';
import { View, Text, Button } from 'react-native';

export default class MyInfoScreen extends React.Component {
  static navigationOptions = {
    title: '내 정보',
  };

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                MyInfo
            </Text>
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Dismiss"
            />            
            <Button
                onPress={() => this.props.navigation.navigate("Home")}
                title="Go Home"
            />            
        </View>
    );
  }
}