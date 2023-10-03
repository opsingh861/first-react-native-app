
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  var [count, setCount] = useState(0);
  return (
    <View>
      <Text style={{fontSize:30}}>{count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}



export default App;