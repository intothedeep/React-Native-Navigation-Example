import React from 'react';
import { 
  View, 
  Text,
  Platform,
  StyleSheet
} from 'react-native';
import { MapView } from 'expo';

export default class MapScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 3, marginTop: 0, paddingTop: 0}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={styles.mapBarInfoContainer}>
          <Text>맵 설정</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mapBarInfoContainer: {
    flex: 1,
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    // paddingVertical: 50,
  },
});

