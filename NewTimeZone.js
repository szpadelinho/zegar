import { useState, useEffect } from "react"
import {StyleSheet, Text, View, Pressable, FlatList} from "react-native"

import List from './List.js'

const NewTimeZone = ({route, navigation}) =>{
    const { timeZones, setTimeZones} = route.params
    const [selectedTimeZone, setSelectedTimeZone] = useState(null)

    const data = Object.entries(List);

    const listItem = ({item}) => (
        <Pressable style={[styles.flatListElement, selectedTimeZone === item[0] && {backgroundColor: "#19212E", borderWidth: 1, borderColor: "#AAC0AA"}]} onPress={() => setSelectedTimeZone(item[0])}>
            <Text style={styles.flatListElementText}>{`${item[0]}`}</Text><Text style={styles.flatListElementText2}>{`(${item[1]})`}</Text>
        </Pressable>
    )

    const addItem = () => {
        if(selectedTimeZone && !(timeZones.includes(selectedTimeZone))){
            setTimeZones((items) => [...items, selectedTimeZone])
        }
        navigation.goBack()
    }

    return(
        <View style={styles.flatListFlex}>
            <View style={styles.flatList}>
                <FlatList data={data} renderItem={listItem} keyExtractor={(item) => item[0]} showsVerticalScrollIndicator={false}/>
            </View>
            <View style={styles.button}>
                <Pressable style={styles.flatListButton} onPress={addItem}>
                    <Text style={styles.flatListButtonText}>Add</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flatList:{
        alignItems: "stretch",
        width: "90%",
        height: "92%"
    },

    button:{
        alignItems: "stretch",
        justifyContent: "center",
        width: "90%",
        height: "8%"
    },

    flatListFlex:{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#11151C",
    },

    flatListElement:{
        paddingVertical: 10,
        backgroundColor: "#212D40",
        width: "100%",
        borderRadius: 10,
        marginVertical: 8,
        flexDirection: "row",
    },

    flatListElementText:{
        width: "50%",
        textAlign: "center",
        color: "#DCEED1",
    },

    flatListElementText2:{
        width: "50%",
        textAlign: "center",
        color: "#AAC0AA"
    },

    flatListButton:{
        width: "100%",
        backgroundColor: "#234E0E",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        borderRadius: 10
    },

    flatListButtonText:{
        color: "#DCEED1",
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default NewTimeZone;