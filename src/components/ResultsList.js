import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import ResultsDetail from "./ResultsDetail";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; 

const ResultsList = (props) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };
  
  return (
    <View style={styles.container}>
      {props.results.map((result) => (
        <TouchableOpacity
          key={result.link}
          onPress={() =>
            navigation.navigate("WebContent", { link: result.link })
          }
          style={styles.resultItem}
        >
          <View style={styles.detailsContainer}>
            <ResultsDetail result={result} />

          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  resultItem: {
    marginBottom: 20,

  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  favoriteContainer: {
    marginLeft: 10,
    bottom: 15
  },
});

export default ResultsList;
