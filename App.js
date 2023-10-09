
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SectionList, Button } from 'react-native';


const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Count: {count}</Text>
      <Text style={{ fontSize: 30 }}>Data: {count}</Text>
      <Button title='Update Count' onPress={() => setCount(count + 1)} />
      <Text></Text>
      <Button title='Update Data' onPress={() => setData(data + 1)} />
      <Users info={{ count, data }} />
    </View>
  );
};

const Users = (props) => {
  const count = props.info.count;
  const data = props.info.data;
  useEffect(() => {
    console.warn("count changed");
  }, [count]); // only re-run the effect if count changes, this is componentDidUpdate
  useEffect(() => {
    console.warn("data changed");
  }, [data]);
  return (
    <View>
      <Text style={{ color: "orange", fontSize: 30 }}>Count: {count}</Text>
      <Text style={{ color: "orange", fontSize: 30 }}>Data: {data}</Text>
    </View>
  )
}



export default App;