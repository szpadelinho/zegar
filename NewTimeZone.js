import { useState, useEffect } from "react"
import {StyleSheet, Text, View, Pressable, FlatList} from "react-native"

import List from './List.js'

const NewTimeZone = ({route, navigation}) =>{
    const { timeZones, setTimeZones} = route.params
    const [selectedTimeZone, setSelectedTimeZone] = useState(null)

    const data = Object.entries(List);

    const listItem = ({item}) => {
        <Pressable onPress={() => setSelectedTimeZone(item[0])}>
            <Text>{`${item[0]} (${item[1]})`}</Text>
        </Pressable>
    }

    const addItem = () => {
        if(selectedTimeZone && !(timeZones.includes(selectedTimeZone))){
            setTimeZones((items) => [...items, selectedTimeZone])
        }
        navigation.goBack()
    }

    return(
        <View>
            <View>
                <FlatList data={data} item={listItem} keyExtractor={(item) => item[0]} showsVerticalScrollIndicator={false}/>
            </View>
            <View>
                <Pressable onPress={addItem}>
                    <Text>Add</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default NewTimeZone;