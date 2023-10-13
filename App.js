import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const App = () => {
  const [hidden, sethidden] = useState(false);
  const [style, setstyle] = useState('default');
  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 30 }}>Platform: {Platform.OS}</Text>
      <Text style={{ fontSize: 30 }}>Version: {Platform.Version}</Text>
      <Text style={{ fontSize: 30 }}>isTV: {Platform.isTV ? 'true' : 'false'}</Text>
      {Platform.os == "android" ? <View style={styles.android}></View> : <View style={styles.ios}></View>}
      <Text style={{ fontSize: 15 }}>{JSON.stringify(Platform)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  android: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  ios: {
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})

export default App;
