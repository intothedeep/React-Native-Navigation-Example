import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

export default class MapScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 2, marginTop: 0, paddingTop: 0}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>맵 설정</Text>
        </View>
      </View>
    );
  }
}