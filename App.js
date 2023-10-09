
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const App = () => {
  const [show, setShow] = useState(true);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Show/Hide Component</Text>
      <Button title='toggle button' onPress={() => setShow(!show)} />
      {
        show ? <Users /> : null
      }
    </View>
  );
};

const Users = () => {
  let i = setInterval(() => {
    console.warn("Hey!")
  }, 2000);

  useEffect(() => {
    return () => clearInterval(i) // this is componentDidUnMount
  })
  return (
    <View>
      <Text style={{ fontSize: 30, color: "green" }}>User Component</Text>
    </View>
  )
}

export default App;