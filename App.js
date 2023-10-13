import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';

const App = () => {
  const [hidden, sethidden] = useState(false);
  const [style, setstyle] = useState('default');
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="blue" barStyle={style} hidden={hidden} />
      <Button title="toggle" onPress={() => sethidden(!hidden)} />
      <Button title="Show" onPress={() => setstyle('dark-content')} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
  }
})

export default App;
