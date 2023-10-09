
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const App = () => {
  const [show, setShow] = useState(false);

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
  return (
    <View>
      <Text style={{ fontSize: 30, color: "green" }}>User Component</Text>
    </View>
  )
}

export default App;