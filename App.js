
import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from 'react-native';


const App = () => {
  const list = [
    { name: 'A', age: 20 },
    { name: 'B', age: 21 },
    { name: 'C', age: 22 },
    { name: 'D', age: 23 },
  ]
  return (
    <View>
      <FlatList 
      data={list}
      renderItem={({item})=><Text style={styles.text}>{item.name}</Text>} />
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