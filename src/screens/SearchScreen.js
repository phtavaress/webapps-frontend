import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
      </View>
      <ScrollView style={styles.result} contentContainerStyle={styles.resultContent}>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ResultsList results={results} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#EFEFF0',
    paddingBottom: 80
  },
  result: {
    flex: 1,
    marginTop: 20, // Ajuste conforme necessário para separar a lista do Search Bar
  },
  resultContent: {
    paddingBottom: 20, // Espaçamento inferior para melhorar a rolagem
  },
});

export default SearchScreen;
