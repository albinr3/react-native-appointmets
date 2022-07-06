import React, { useState } from 'react';
import Form from './src/components/Form';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal
} from 'react-native';


const App = () => {
  const [modalVisible, setModalVisible]= useState(false);

  const newAppHandler = () => {
    console.log("Boton presionado")
    setModalVisible(true)
  }
  

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text style={styles.title}>Appointment Manager for {""}
        <Text style={styles.titleBold}>Veterinary</Text>
      </Text>

      <Pressable onPress={newAppHandler} style={styles.btnNewApp}>
        <Text style={styles.btnTextNewApp}>New Appointment</Text>
      </Pressable>

      <Form 
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      />
      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F3F4F6",
    flex: 1
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#374151",
    fontWeight: "600"
  },
  titleBold: {
    fontWeight: "900",
    color: "#6d28d9"
  },
  btnNewApp: {
    backgroundColor: "#6d28d9",
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 12
  },
  btnTextNewApp: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "900",
    textTransform: "uppercase"
  }

});

export default App;
