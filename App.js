
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const App = () => {
  const users = [
    { name: 'A', age: 20 },
    { name: 'B', age: 21 },
    { name: 'C', age: 22 },
    { name: 'D', age: 23 },
    { name: 'E', age: 24 },
    { name: 'F', age: 25 },
    { name: 'G', age: 26 }
  ]
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Component in loop with FlatList</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData name={item.name} age={item.age} />}
      />
    </View>
  );
};

const UserData = (props) => {
  const item = props
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "yellow",
    flexDirection: "row"

  },
  text: {
    color: "orange",
    fontSize: 30,
    borderColor: "yellow",
    flex: 1,
    textAlign: "center",

  }
})


export default App;