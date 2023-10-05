
import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import ClassComponent from './ClassComponent';

const App = () => {
const name = "hello";
const item = "item";
  return (
    <View>
      <ClassComponent name={name} item = {item} /> {/* in this props name should be same as variable */}
    </View>
  );
};



export default App;