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
import { TouchableOpacity } from "react-native-gesture-handler";

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
        {/* social buttons are here */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialCircle}>
            <Image
              source={require("./../assets/facebookLogo.png")}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialCircle}>
            <Image
              source={require("./../assets/googleLogo.png")}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialCircle}>
            <Image
              source={require("./../assets/appleLogo.png")}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>
        <Pressable style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>
        <View style={styles.loginPart}>
          <Text style={{ color: "#A8B0AF" }}>Existing account?</Text>
          <Pressable>
            <Text style={{ fontWeight: "bold" }}>Login</Text>
          </Pressable>
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
    marginTop: 20,
    fontSize: 24,
    fontFamily: "Poppins_SemiBold",
  },
  slogan: {
    width: "85%",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "medium",
    marginTop: 5,
  },
  socialContainer: {
    width: "50%",
    height: "10%",
    marginTop: "5%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
  },
  socialCircle: {
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#A8B0AF",
  },
  socialLogo: {
    width: 48,
    height: 36,
  },
  lineContainer: {
    width: "80%",
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  line: {
    width: "43%",
    height: 1,
    backgroundColor: "#D0CFCC",
  },
  orText: {
    alignSelf: "center",
    marginTop: -2,
    fontSize: 16,
    color: "#000",
  },
  signUpButton: {
    backgroundColor: "#000",
    marginTop: "10%",
    width: "80%",
    height: 48,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    color: "#fff",
  },
  loginPart: {
    flexDirection: "row",
    marginTop: "10%",
  },
});
