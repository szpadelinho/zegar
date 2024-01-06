import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Clock from "./Clock.js";
import List from "./List.js";

const TimeZoneItem = ({timeZone, setTimeZone}) => {
    return(
        <Pressable style={styles.item} onPress={() => setTimeZone(timeZone)}>
            <Text style={styles.itemText}>{List[timeZone]}</Text>
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
        paddingVertical: 5
    },

    itemText:{
        color: "#AAC0AA"
    }
})

export default TimeZoneItem;