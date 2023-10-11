import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

const App = () => {
  const skills = [
    {
      id: 1,
      name: "C++"
    },
    {
      id: 2,
      name: "Python"
    },
    {
      id: 3,
      name: "Java"
    },
    {
      id: 4,
      name: "HTML"
    },
  ];

  const [radioSelected, setRadioSelected] = useState(1);

  return (
    <View style={styles.main}>
      <View style={styles.column}>
        {skills.map((item, index) => (
          <TouchableOpacity key={item.id} onPress={() => setRadioSelected(item.id)}>
            <View style={styles.container}>
              <View style={styles.button}>
                {radioSelected == item.id ? <View style={styles.internal}></View> : null}
              </View>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column', // Set flexDirection to 'column' for a vertical alignment
    alignItems: 'center', // Align items in the center of the column
    justifyContent: 'center', // Align items to the center of the column
  },
  button: {
    borderColor: 'blue',
    borderWidth: 2,
    height: 25,
    width: 25,
    borderRadius: 15,
    marginRight: 5,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    flexDirection: 'row',
  },
  internal: {
    backgroundColor: 'blue',
    height: 15,
    width: 15,
    borderRadius: 100,
    margin: 3,
  },
  text: {
    color: 'blue',
  },
});

export default App;
