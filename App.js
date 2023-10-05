
import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';


const App = () => {
  const users = [
    { name: "John", age: 30, data: ["c++", "python"] },
    { name: "Doe", age: 20, data: ["c++", "python", "react"] },
    { name: "Smith", age: 40, data: ["c++", "python", "react", "react native"] },
    { name: "Alex", age: 50, data: ["c++", "python", "react", "react native", "node js"] },

  ]
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Section List in react native</Text>
      <SectionList
        sections={users}
        renderItem={({ item }) => <Text style={{ fontSize: 20, marginLeft:20 }}>{item}</Text>}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{fontSize:25,color:"blue"}}>{name}</Text>
        )}
      />
    </View>
  );
};



export default App;