import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const App = () => {

  return (
    <View style={styles.main}>
      <Pressable
      onPress={()=>console.warn("Normal press")}
      onLongPress={()=>console.warn("Long press")}
      delayLongPress={3000}
      onPressIn={()=>console.warn("Press in")}
      onPressOut={()=>console.warn("Press out")}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  pressableBtn: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 5,
    color: "#fff",
    textAlign: 'center',
    fontSize: 20
  }

})

export default App;
