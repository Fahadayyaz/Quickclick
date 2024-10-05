import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const LoginSignUP = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("./../assets/loginSignUpBg.png")}
        style={styles.contentContainer}
      >
        <Image
          source={require("./../assets/QuickClickLogo.png")}
          style={styles.logo}
        />
        <Text style={styles.heading}>Buy & Sale Product</Text>
        <Text style={styles.slogan}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <View style={styles.socialContainer}>
          <View style={styles.facebookContainer}></View>
          <View style={styles.googleContainer}></View>
          <View style={styles.appleContainer}></View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginSignUP;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 84,
    alignSelf: "center",
    marginTop: "60%",
  },
  heading: {
    marginTop: 30,
    fontSize: 24,
    fontFamily: "Poppins_SemiBold",
  },
  slogan: {
    width: "85%",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "medium",
    marginTop: 15,
  },
  socialContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  facebookContainer: {},
  googleContainer: {},
  appleContainer: {},
});
