import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import React from "react";
import {Link} from 'expo-router';
import icedCoffee from "@/assets/images/iced-coffee.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffee}
        style={styles.image}
      >
      <Text style={styles.title}>Coffee Shop</Text>
      <Link href="/contact" style={{marginHorizontal: "auto"}}  asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </Pressable>
      </Link>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    marginBottom: 10,
  },
  button:{
    backgroundColor: "black",
    marginHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,

  },
  buttonText:{
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center", 
  },
});

export default app;
