import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const ResultsList = (props) => {

    return (
        <View>
            <FlatList 
            style={styles.result}
            data={props.results} 
            keyExtractor={(result) => result.title}
            renderItem={(result) => {
                return <Text >{result.item.title}</Text>
            }}/>
        </View>
    )

};

const styles = StyleSheet.create({
    result: {
        position: 'absolute',
        width: 315,
        height: 300,
        left: 30,
        top: 115
    }

})

export default ResultsList;