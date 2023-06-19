import React, { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import { StyleSheet } from "react-native";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            <View style={styles.result}>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <ResultsList results={results} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // result: {
    //     position: 'absolute',
    //     width: 315,
    //     height: 35,
    //     left: 30,
    //     top: 115
    // },
    resultItem: {
        position: 'absolute',
        fontSize: 24,
        lineHeight: 30,
        
    }
})

export default SearchScreen;