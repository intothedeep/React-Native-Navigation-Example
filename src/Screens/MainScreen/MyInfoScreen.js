import React from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class MyInfoScreen extends React.Component {
  static navigationOptions = {
    title: '내 정보'
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
                onPress={() => this.props.navigation.navigate('Settings')}
                title="Dismiss between stacks"            
            />
            <Button
                onPress={() => this.props.navigation.navigate("Home")}
                title="Go Home"
            />            
        </View>
    );
  }
}

export default withNavigation(MyInfoScreen);