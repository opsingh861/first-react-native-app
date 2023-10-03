
import React from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {

  return (
    <View>
      <Child name="Child 1" />
    </View>
  );
}

const Child = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{props.name}</Text>
    </View>
  )
}



export default App;