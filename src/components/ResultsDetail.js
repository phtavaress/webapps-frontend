import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const ResultsDetail = (props) => {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Image style={styles.image} source={{ uri: props.result.icon }} />
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {props.result.title}
        </Text>

        <TouchableOpacity onPress={handleFavoritePress}>
        {isFavorite ? (
                  <MaterialIcons name="favorite" size={30} color="#d400a5" />
                ) : (
                  <MaterialIcons name="favorite-border" size={30} color="black" />
                )}
        </TouchableOpacity>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  result: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 1
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 4,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default ResultsDetail;
