import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Clock from "./Clock.js"
import NewTimeZone from "./NewTimeZoneButton.js"
import TimeZoneItem from "./TimeZoneItem.js"

const Main = ({navigation}) =>{
    const [timeZone, setTimeZone] = useState("Europe/Paris")
    const [timeZones, setTimeZones] = useState([])

    useEffect(() => {
        AsyncStorage.getItem("timeZones")
          .then((value) => {
            if (value !== null) {
              setTimeZones(JSON.parse(value));
            }
          })
          .catch((error) => console.log(error));
      }, []);
    
      useEffect(() => {
        AsyncStorage.setItem("timeZones", JSON.stringify(timeZones)).catch((error) =>
          console.log(error)
        );
      }, [timeZones]);

    return(
        <View style={styles.container}>
            <View style={styles.clockContainer}>
                <Clock timeZone={timeZone} timeSize={40} dateSize={20}/>
            </View>
            <FlatList style={styles.flatList}
                data={timeZones}
                renderItem={({item}) => (
                    <TimeZoneItem
                        timeZone={timeZone}
                        mainTimeZone={timeZone}
                        setTimeZone={setTimeZone}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
            <NewTimeZone
                navigation={navigation}
                setTimeZones={setTimeZones}
                timeZones={timeZones}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#11151C",
        color: "white"
    },

    clockContainer:{
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "15%",
        borderRadius: 15,
        backgroundColor: "#212D40",
        color: "white",
        marginVertical: 20
    },

    flatList:{
        width: "90%",
    },
})

export default Main;