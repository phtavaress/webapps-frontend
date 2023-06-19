import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { TextInput } from "react-native";

const SearchBar = (props) => {
    return (
        <View style={styles.backgroundStyle}>
            <EvilIcons name="search" style={styles.iconStyle} />
            <TextInput 
                placeholder="Search for Webapps" 
                style={styles.inputPlaceholder}
                value={props.term}
                onChangeText={props.onTermChange}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={props.onTermSubmit}
                returnKeyType="search" />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        position: 'absolute',
        width: 300,
        height: 40,
        left: 30,
        top: 35,
        backgroundColor: '#EFEFF0',
        borderRadius: 20,
        flexDirection: 'row'
    },
    inputPlaceholder: {
        flex: 1,
        left: '25%'
        
    },
    iconStyle: {
        fontSize: 30,
        color: "#848488",
        alignSelf: 'center',
        left: '20%'
    }
});

export default SearchBar;