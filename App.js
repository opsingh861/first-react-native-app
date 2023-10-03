
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';


const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const clear = () => {
    setDisplay(false)
    setName("")
    setEmail("")
    setPassword("")
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Simple form in react native</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        placeholder='Enter your name here'
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.textInput} value={email}
        placeholder='Enter your email here'
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput} value={password}
        placeholder='Enter your password here'
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title='show details'
        onPress={() => setDisplay(true)} />
      <View style={{ marginTop: 8 }}>
        <Button color={"green"} title='clear details' onPress={clear} />
      </View>
      <View>
        {display ? <View>
          <Text>Your name is: {name}</Text>
          <Text>Your email is: {email}</Text>
          <Text>Your password is: {password}</Text>
        </View> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    font: 30,
    color: "black",
    borderWidth: 2,
    margin: 10,
    borderColor: "blue"
  }
})


export default App;