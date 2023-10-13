import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'

const App = () => {

  return (
    <WebView style={styles.main} source={{ uri: 'https://www.google.com' }} />
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    margin:10
  }

})

export default App;
