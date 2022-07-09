import React, { useState } from 'react';
import Form from './src/components/Form';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  FlatList,
  Alert
} from 'react-native';
import Patient from './src/components/Patient';
import PatientInfo from './src/components/PatientInfo';


const App = () => {
  const [modalVisible, setModalVisible]= useState(false);
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const [patientModal, setPatientModal]= useState(false);
  

  const newAppHandler = () => {
    console.log("Boton presionado")
    setModalVisible(true)
  }

  //function to get the id from the patient you want to edit
  const editPatient = id => {
    const editPatient = patients.filter( item => item.id === id)
    setPatient(editPatient[0]); //we put it with 0 index because to avoid a array being created
  }

  //function to get the id from the patient you want to delete
  const deletePatient = id => {
    Alert.alert(
      "Are you sure you want to delete this appointment?",
      "This action can not be undone!",
      [
        {text: "Cancell"},
        {text: "Yes, delete!", onPress: () => {
          const deletedPatientList = patients.filter( item => item.id !== id) //here gonna return all the patients except the one with the id
          setPatients(deletedPatientList); //we put ir with 0 index because to avoid a array being created
        }
        }
      ]
    )
  }

  //this fuction is to avoid dismount the form when clicking close form
  const closeForm = () => {
    setModalVisible(false)
  }
  

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text style={styles.title}>Appointment Manager for {""}
        <Text style={styles.titleBold}>Veterinary</Text>
      </Text>

      <Pressable onPress={newAppHandler} style={styles.btnNewApp}>
        <Text style={styles.btnTextNewApp}>New Appointment</Text>
      </Pressable>

      {patients.length === 0 ? 
        <Text style={styles.text}>There is not patients</Text> : 
          <FlatList
            data={patients}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return(
                <Patient 
                item={item} 
                setModalVisible={setModalVisible}
                editPatient={editPatient}
                deletePatient={deletePatient}
                setPatientModal={setPatientModal}
                setPatient={setPatient}
                />
              )
            }}
            >

          </FlatList>
      }

      {modalVisible && (
        <Form 
        modalVisible={modalVisible}
        closeForm={closeForm}
        setPatients={setPatients}
        patients={patients}
        patient={patient}
        setPatient={setPatient}
        />
      )}
      
      <Modal
      visible={patientModal}
      animationType="fade"
      >
        <PatientInfo 
        patient={patient}
        setPatientModal={setPatientModal}
        setPatient={setPatient}/>
      </Modal>
      

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
  },
  text: {
    textAlign: "center",
    fontWeight: "700",
    marginTop: 30,
    fontSize: 24,
    color: "black"
  }

});

export default App;
