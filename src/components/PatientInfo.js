import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Pressable} from 'react-native';

const PatientInfo = ({patient, setModalPatient}) => {
  console.log(patient);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Information {" "}
        <Text style={styles.titleBold}>Patient</Text>
      </Text>

      <View>
        <Pressable
          style={styles.btnCancell}
          onLongPress={() => {
            setModalPatient(false);
          }}>
          <Text style={styles.btnCancellText}>X Close</Text>
        </Pressable>
      </View>

      <Text>{patient.patient}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f59e0b",
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
  btnCancell: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#E06900',
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
});

export default PatientInfo;
