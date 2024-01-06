import { useState, useEffect } from "react"
import {StyleSheet, Text, View, Pressable} from "react-native"

const NewTimeZone = ({timeZones, setTimeZones, navigation}) => {
    return(
        <Pressable style={styles.button} onPress={() => {navigation.navigate("Add a new timezone", {
            setTimeZones: setTimeZones,
            timeZones: timeZones
          });
        }}>
            <Text style={styles.buttonTextColor}>Add a new timezone to your list</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        width: "90%",
        backgroundColor: "#234E0E",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        paddingVertical: 5,
        borderRadius: 10
    },

    buttonTextColor:{
        color: "#DCEED1",
        fontSize: 16,
        fontWeight: 500
    }
})

export default NewTimeZone;