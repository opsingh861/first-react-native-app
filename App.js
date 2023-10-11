
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


const App = () => {

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 20 }}>Use of Touchable highlights</Text>
      <TouchableHighlight onPress={() => console.warn("hello")}>
        <Text style={styles.success}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.success, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.success, styles.info]}>Info</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.success, styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.success, styles.error]}>Error</Text>
      </TouchableHighlight>

    </View>
  );
};

const styles = StyleSheet.create({
  main:
  {
    flex: 1
  },
  success: {
    fontSize: 15,
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    // hide the onPress black color effect 
    underlayColor: 'transparent'
  
  },
  error: { backgroundColor: 'red' },
  warning: { backgroundColor: 'yellow' },
  primary: { backgroundColor: 'blue' },
  info: { backgroundColor: 'gray' },


})

export default App;