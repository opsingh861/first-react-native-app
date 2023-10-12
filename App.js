import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';

const App = () => {


  const [show, setShow] = useState(false);
  const loader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  return (
    <View style={styles.main}>
      <ActivityIndicator size={'large'} color={'green'} animating={show}  /* only large small and medium supports in ios */ />
      <ActivityIndicator size={60} color={'blue'} animating={show} />
      <Button title='Load' onPress={loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;
