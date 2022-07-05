import React, {useState} from 'react'
import {Text, Modal, StyleSheet, SafeAreaView, View, TextInput, Pressable, ScrollView} from "react-native"

function Form(props) {
  const {modalVisible} = props;

  const [patient, setPatient] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [sympthoms, setSympthoms] = useState("");

  return (
    <Modal animationType='slide' visible={modalVisible} >
      <SafeAreaView style={styles.backgroundStyle}>
        <ScrollView>
          <Text style={styles.title}>New {""}
            <Text style={styles.titleBold}>Appointment</Text>
          </Text>

          <View style={styles.field}>
            <Text style={styles.label}>Name Patient</Text>
            <TextInput 
            placeholder='Patient Name' value={patient} onChangeText={setPatient} style={styles.input}/>

            <Text style={styles.label}>Owner</Text>
            <TextInput 
            placeholder='Owner Name' value={owner} onChangeText={setOwner} style={styles.input}/>   

            <Text style={styles.label}>Email</Text>
            <TextInput 
            placeholder='Owner Email' value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />

            <Text style={styles.label}>Tel</Text>
            <TextInput 
            placeholder='White your telephone' value={tel} onChangeText={setTel} style={styles.input} keyboardType="phone-pad" maxLength={10}/>

            <Text style={styles.label}>Sympthoms</Text>
            <TextInput 
            placeholder='White the sympthoms of the pet' value={sympthoms} onChangeText={setSympthoms} style={styles.input} numberOfLines={5} />

            <Pressable style={styles.btnNewApp}>
              <Text style={styles.btnTextNewApp}>Save Patient</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#6D28D9",
    flex: 1
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    fontWeight: "600"
  },
  titleBold: {
    fontWeight: "900"
  },
  field: {
    marginTop: 40,
    marginHorizontal: 30,
    marginBottom: 100
  },
  label: {
    color: "#fff",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600"
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10
  },
  btnNewApp: {
    backgroundColor: "fff",
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
})

export default Form