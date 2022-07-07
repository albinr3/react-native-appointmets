import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Patient = ({item}) => {
    const {patient, date} = item;

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
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Patient</Text>
      <Text style={styles.text}>{patient}</Text>
      <Text style={styles.date}>{formatDate(date)}</Text>

      <View style={styles.btnContainer}>
        <Pressable style={[styles.btnEdit, styles.btn]}>
            <Text style={styles.textBtn}>Edit</Text>
        </Pressable>

        <Pressable style={[styles.btnDel, styles.btn]}>
            <Text style={styles.textBtn}>Delete</Text>
        </Pressable>


      </View>
    </View>
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