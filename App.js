
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import exStyles from './styles';

const App = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={{ fontSize: 30 }} >Your name is: {name}</Text>
      <TextInput style={styles.textInput}
        placeholder='Enter your name here'
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="Clear Value" onPress={() => {
        setName("");
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    font: 30,
    color: "blue",
    borderWidth: 2,
    margin: 10,
  }
})


export default App;