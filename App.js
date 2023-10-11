
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const App = () => {

  return (
    <View style={styles.box}>
      <View style={styles.box1}>
        <View style={styles.box3}></View>
        <View style={styles.box2}></View>
        <View style={{ backgroundColor: "brown",flex:1 }}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: 'row',
    margin:5
  },
  box2: {
    flex: 1,
    backgroundColor: "green"
  },
  box3: {
    flex: 1,
    backgroundColor: "yellow"
  }
})

export default App;