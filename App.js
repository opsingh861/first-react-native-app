import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';

const App = () => {


  const [show, setShow] = useState(true);



  return (
    <View style={styles.main}>
      <Modal animationType='slide' transparent={true} visible={show}>
        <View style={styles.outer}>
          <View style={styles.inner}>
            <Text style={styles.modalText}>How was your day?</Text>
            <Button title='Close' onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal>
      <Button title='Show Modal' onPress={() => setShow(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 10,
  },
  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inner: {
    backgroundColor: '#fff',
    width: 300,
    padding: 50,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
    opacity: 1,
    justifyContent:'center',


  },
  modalText:{
    fontSize:20,
    marginBottom:10
  }

})

export default App;
