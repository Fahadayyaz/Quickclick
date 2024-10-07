import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  // navigation below
  const navigation = useNavigation();

  // default border color
  const [borderColor, setBorderColor] = useState("gray");
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./../assets/themeBg.png")}
        style={styles.bgImage}
      >
        <View style={styles.contentContainer}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </Pressable>
          <Text style={styles.heading}>Welcome Back!</Text>
          <Text
            style={{
              marginTop: "8%",
              width: "80%",
              fontFamily: "Lato_Bold",
              fontSize: 14,
            }}
          >
            Yay! You're back! Thanks for shopping with us. We have excited deals
            and promotions going on, grab your pick now!
          </Text>

          <Text
            style={{
              marginTop: "20%",
              fontFamily: "Lato_Black",
              fontSize: 18,
              textDecorationLine: "underline",
            }}
          >
            LOG IN
          </Text>
          <View style={styles.loginContainer}>
            <Text
              style={{
                fontFamily: "Lato_Black",
                fontSize: 14,
              }}
            >
              Email address
            </Text>
            <TextInput
              style={[styles.input, { borderColor }]} // Dynamic border color
              placeholder="Enter text here"
              onFocus={() => setBorderColor("blue")} // Change border to blue on focus
              onBlur={() => setBorderColor("gray")} // Change border back to gray on blur
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    marginTop: "10%",
    // backgroundColor: "red",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F9",
    width: 44,
    height: 44,
    borderRadius: 24,
  },
  heading: {
    marginTop: "12%",
    fontSize: 24,
    fontFamily: "Lato_Black",
  },
  loginContainer: {
    marginTop: "22%",
    width: "80%",
    alignSelf: "center",
  },
  input: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
  },
});
