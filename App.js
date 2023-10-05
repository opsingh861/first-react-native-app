
import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import ClassComponent from './ClassComponent';

const App = () => {
  const users = [
    { name: "John", age: 30, data: ["c++", "python"] },
    { name: "Doe", age: 20, data: ["c++", "python", "react"] },
    { name: "Smith", age: 40, data: ["c++", "python", "react", "react native"] },
    { name: "Alex", age: 50, data: ["c++", "python", "react", "react native", "node js"] },

  ]
  return (
    <View>
      <ClassComponent />
    </View>
  );
};



export default App;