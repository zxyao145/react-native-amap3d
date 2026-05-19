import * as React from "react";
import { Alert } from "react-native";
import { MapView, Marker } from "react-native-amap3d";

export default () => (
  <MapView>
    <Marker
      draggable
      position={{ latitude: 39.806901, longitude: 116.397972 }}
      icon={require("../images/flag.png")}
      onPress={() => Alert.alert("onPress")}
      onDragEnd={({ nativeEvent }) =>
        Alert.alert(`onDragEnd: ${nativeEvent.latitude}, ${nativeEvent.longitude}`)
      }
    />
  </MapView>
);
