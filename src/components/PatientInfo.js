import React from 'react';
import {Text, SafeAreaView, View, StyleSheet, Pressable} from 'react-native';
import formatDate from '../helpers';


const PatientInfo = ({patient, setPatientModal, setPatient}) => {
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
            setPatientModal(false);
            setPatient({})
          }}>
          <Text style={styles.btnCancellText}>X Close</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.field}>
          <Text style={styles.label}>Patient: </Text>
          <Text style={styles.value}>{patient.patient}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Owner: </Text>
          <Text style={styles.value}>{patient.owner}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Id: </Text>
          <Text style={styles.value}>{patient.id}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.value}>{patient.email}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Tel: </Text>
          <Text style={styles.value}>{patient.tel}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Date: </Text>
          <Text style={styles.value}>{formatDate(patient.date)}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Sympthoms: </Text>
          <Text style={styles.value}>{patient.sympthoms}</Text>
        </View>
      </View>
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
  },
  content: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  field:{
    marginBottom: 10
  },
  label: {
    textTransform: "uppercase",
    color: "#374151",
    fontWeight: "600",
    marginBottom: 3,
    
  },
  value: {
    fontWeight: "700",
    fontSize: 22,
    color: "#334155"
  }
});

export default PatientInfo;
