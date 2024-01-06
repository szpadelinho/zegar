import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Clock = ({timeZone, timeSize, dateSize}) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);
    
      const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        timeZone: timeZone,
      };

    return(
        <View style={styles.clockContainer}>
            <Text style={[styles.timeText, {fontSize: timeSize}]}>{currentTime.toLocaleTimeString("PL-pl", {timeZone: timeZone})}</Text>
            <Text style={[styles.dateText, {fontSize: dateSize}]}>{currentTime.toLocaleDateString("PL-pl", options)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  clockContainer:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center"
  },

  timeText:{
    fontWeight: 500,
    color: "#DCEED1"
  },
  
  dateText:{
    color: "#AAC0AA"
  }
})

export default Clock;