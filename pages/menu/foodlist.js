import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function Foodlist({ dishes, navigation }) {
  return (
    <ScrollView>
      {dishes.map((dish) => (
        <View key={dish.id}>
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Food details', { dish })}>
          <Image source={{ uri: dish.image_url }} style={styles.logo} />

            <Text style={styles.subtitle}>{dish.dish_name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
  box: {
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 10,
    // backgroundColor: "#F5F5F5",
    borderRadius: 30,
    alignItems:"center",
    justifyContent:"center"
  },
  logo: {
    width: 340,
    height: 200,
    borderRadius:20,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default Foodlist;