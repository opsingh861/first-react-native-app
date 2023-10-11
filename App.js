
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';


const App = () => {
  const [radioSelected, setRadioSelected] = useState(1);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setRadioSelected(1)}>
        <View style={styles.container}>
          <View style={styles.button}>
            {radioSelected == 1 ? <View style={styles.internal}></View> : null}
          </View>
          <Text style={styles.text}>Radio Button 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRadioSelected(2)}>
        <View style={styles.container}>
          <View style={styles.button}>
            {radioSelected == 2 ? <View style={styles.internal}></View> : null}
          </View>
          <Text style={styles.text}>Radio Button 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:
  {
    borderColor: 'blue',
    borderWidth: 2,
    height: 25,
    width: 25,
    borderRadius: 15,
    marginRight: 5,
  },
  container:
  {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    margin: 8
  },
  internal: {
    backgroundColor: 'blue',
    height: 15,
    width: 15,
    borderRadius: 100,
    margin: 3
  },
  text: {
    color: 'blue'
  }


})

export default App;