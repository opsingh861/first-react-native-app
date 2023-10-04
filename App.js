
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const App = () => {
  const list = [
    { name: 'A', age: 20 },
    { name: 'B', age: 21 },
    { name: 'C', age: 22 },
    { name: 'D', age: 23 },
    { name: 'E', age: 24 },
    { name: 'F', age: 25 },
    { name: 'G', age: 26 },
    { name: 'H', age: 27 },
    { name: 'I', age: 28 },
    { name: 'J', age: 29 },
    { name: 'K', age: 30 },
    { name: 'L', age: 31 },
    { name: 'M', age: 32 },
    { name: 'N', age: 33 },
    { name: 'O', age: 34 },
    { name: 'P', age: 35 },
    { name: 'Q', age: 36 },
    { name: 'R', age: 37 },
  ]
  return (
    <View>
      <Text style={{ fontSize: 20 }}>List in react native using map function</Text>
      <ScrollView style={{marginBottom:30}}>
        {list.map((item, index) => <Text key={index} style={styles.text}>{item.name} {item.age}</Text>)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
  },
})


export default App;