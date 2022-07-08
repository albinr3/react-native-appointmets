import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Patient = ({item, setModalVisible, editPatient, deletePatient, setPatientModal, setPatient}) => {
    const {patient, date, id} = item;

    const formatDate = date => {
        const newDate = new Date(date);
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }

        return newDate.toLocaleDateString("es-ES", options)
    }

    const handleEdit = (id) => {
        setModalVisible(true);
        editPatient(id)
    }

    const handleDelete = (id) => {
        deletePatient(id)
    }

  return (
    <Pressable onPress={() => {
        setPatientModal(true)
        setPatient(item)
        
        }}>
        <View style={styles.container}>
        <Text style={styles.label}>Patient</Text>
        <Text style={styles.text}>{patient}</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>

        <View style={styles.btnContainer}>
            <Pressable onPress={() => handleEdit(id)} style={[styles.btnEdit, styles.btn]}>
                <Text style={styles.textBtn}>Edit</Text>
            </Pressable>

            <Pressable onPress={() => handleDelete(id)} style={[styles.btnDel, styles.btn]}>
                <Text style={styles.textBtn}>Delete</Text>
            </Pressable>


        </View>
        </View>
    </Pressable>
  )
}

export default Patient

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: 20,
        borderBottomColor: "black",
        borderBottomWidth: 1
    },
    label: {
        color: "#374151",
        textTransform: "uppercase",
        fontWeight: "700"
    },
    text: {
        color: "#6D28D9",
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 10
    },
    date: {
        color: "#374151"
    },
    btnEdit: {
        backgroundColor: "#f59e0b"
    },
    btnDel: {
        backgroundColor: "#ef4444"
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    textBtn: {
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: 12,
        color: "#fff"
    }
})