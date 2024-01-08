import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Clock from "./Clock.js";
import List from "./List.js";

const TimeZoneItem = ({timeZone, mainTimeZone, setTimeZone}) => {
    return(
        <Pressable style={[styles.item, timeZone === mainTimeZone && { backgroundColor: "#19212E", borderWidth: 1, borderColor: "#AAC0AA" }]} onPress={() => setTimeZone(timeZone)}>
            <View style={styles.UTC}>
                <Text style={styles.itemText}>{List[timeZone]}</Text>
                <Text style={styles.itemTextPlace}>{timeZone}</Text>
            </View>
            <View>
                <Clock timeZone={timeZone} timeSize={20} dateSize={15}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#181F2A",
        borderRadius: 10,
        paddingVertical: 5,
        marginVertical: 5
    },

    itemText:{
        color: "#AAC0AA"
    },

    itemTextPlace:{
        color: "#AAC0AA",
        fontSize: 12
    },
    
    UTC:{
        justifyContent: "center",
        alignItems: "center"
    }
})

export default TimeZoneItem;