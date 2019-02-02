import React from 'react';
import { View, Text, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: '설정',
  };

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                settings
            </Text>
            <Button
              title="내 정보 switch"
              onPress={() => this.props.navigation.navigate('MyInfo')}/>
            <Button
              title="내 정보 modal"
              onPress={() => this.props.navigation.navigate('MyInfoModal')}/>
        </View>
    );
  }
}
