
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SectionList, Button } from 'react-native';


const App = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.warn("hello") // this will run after every render including the updation of the state
  // })
  // useEffect(() => {
  //   console.warn("hello") // this will run only once after the first render
  // }, []) // this is the dependency array, if we pass an empty array then it will run only once after the first render, we call it as componentDidMount
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{count}</Text>
      <Button title='Increment' onPress={() => setCount(count + 1)} />
    </View>
  );
};



export default App;