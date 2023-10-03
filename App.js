
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import exStyles from './styles';
const App = () => {

  return (
    <View>
      <Text style={{ fontSize: 30, color: "orange" }}>This is inline styling</Text>
      <Text style={styles.textStyle}>This is internal styling</Text>
      <Text style={exStyles.textStyle}>This is external styling</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "green",
    textAlign: "center",
    textAlignVertical: "center",
    margin: 10,
    backgroundColor: "yellow",
    height: 100,
    width: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
    fontStyle: "italic",
    fontWeight: "bold",

  }
})


export default App;