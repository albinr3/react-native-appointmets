import React, {useState} from 'react'
import {Text, Modal, StyleSheet, SafeAreaView, View, TextInput, Pressable, ScrollView} from "react-native"
import DatePicker from 'react-native-date-picker';

function Form(props) {
  const {modalVisible, setModalVisible} = props;

  const [patient, setPatient] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState(new Date);
  const [sympthoms, setSympthoms] = useState("");
  

  return (
    <Modal animationType='slide' visible={modalVisible} >
      <SafeAreaView style={styles.backgroundStyle}>
        <ScrollView>
          <Text style={styles.title}>New {""}
            <Text style={styles.titleBold}>Appointment</Text>
          </Text>

          <Pressable style={styles.btnCancell} onLongPress={() => setModalVisible(false)}>
            <Text style={styles.btnCancellText}>X Close</Text>
          </Pressable>

          <View style={styles.field}>
            <Text style={styles.label}>Name Patient</Text>
            <TextInput 
            placeholder='Patient Name' value={patient} onChangeText={setPatient} style={styles.input}/>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Owner</Text>
            <TextInput 
            placeholder='Owner Name' value={owner} onChangeText={setOwner} style={styles.input}/> 
          </View>  

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
            placeholder='Owner Email' value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Tel</Text>
            <TextInput 
            placeholder='White your telephone' value={tel} onChangeText={setTel} style={styles.input} keyboardType="phone-pad" maxLength={10}/>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              Appointment Date
            </Text>
            <View style={styles.containerDate}>
              <DatePicker 
                date={date} 
                locale="es" 
                mode='date'
                onDateChange={(date) => setDate(date)}/>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Sympthoms</Text>
            <TextInput 
            placeholder='White the sympthoms of the pet' 
            value={sympthoms} 
            onChangeText={setSympthoms}
            style={styles.input}
            multiline={true}
            numberOfLines={5} />
          </View>

          <View style={styles.field}>
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
    marginTop: 10,
    marginHorizontal: 30,

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

  },
  btnNewApp: {
    backgroundColor: "#f59e0b",
    padding: 10,
    marginVertical: 30,
    borderRadius: 12

  },
  btnTextNewApp: {
    textAlign: "center",
    color: "#F0F0F0",
    fontSize: 18,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  containerDate: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 10
  },
  btnCancell: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#5827A4",
    marginHorizontal: 100,
    paddingHorizontal: 1,
    paddingVertical: 10,
    borderRadius: 12,
  },
  btnCancellText: {
    color: "white",
    textAlign: 'center',
    fontWeight: "900",
    fontSize: 15,
    textTransform: 'uppercase'
  }
})

export default Form