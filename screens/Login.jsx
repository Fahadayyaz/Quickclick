import React, { useState } from "react";
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  // navigation below
  const navigation = useNavigation();

  // email and password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // default border color
  const [borderColor, setBorderColor] = useState("#D2D2D2");
  const [passwordBorderColor, setPasswordBorderColor] = useState("#D2D2D2");

  // default text color
  const [textColor, setTextColor] = useState("#D2D2D2");
  const [passwordTextColor, setPasswordTextColor] = useState("#D2D2D2");

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" />
      <Image
        source={require("./../assets/themeBg.png")}
        style={styles.bgImage}
      />
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
            marginTop: "10%",
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.loginContainer}
        >
          <Text
            style={{
              fontFamily: "Lato_Black",
              fontSize: 14,
            }}
          >
            Email address
          </Text>
          <TextInput
            style={[
              styles.input,
              { borderColor: borderColor, color: textColor },
            ]}
            placeholder="Enter email here"
            placeholderTextColor="#D2D2D2"
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onFocus={() => {
              setBorderColor("#000000");
              setTextColor("#303030");
            }}
            onBlur={() => {
              setBorderColor("#D2D2D2");
              setTextColor("#303030");
            }}
          />

          <Text
            style={{
              fontFamily: "Lato_Black",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Password
          </Text>
          <TextInput
            style={[
              styles.input,
              { borderColor: passwordBorderColor, color: passwordTextColor },
            ]}
            placeholder="Enter password"
            placeholderTextColor="#D2D2D2"
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => {
              setPasswordBorderColor("#000000");
              setPasswordTextColor("#303030");
            }}
            onBlur={() => {
              setPasswordBorderColor("#D2D2D2");
              setPasswordTextColor("#303030");
            }}
          />
          {/* save password section goes here */}
          <View style={styles.savePasswordSec}>
            <View style={styles.checkbox}></View>
            <Text>Save Password</Text>
            <Pressable>
              <Text>Forgot Password</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bgImage: {
    width: 370,
    height: 350,
  },
  contentContainer: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    position: "absolute",
  },
  backButton: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F9",
    width: 44,
    height: 44,
    borderRadius: 24,
  },
  heading: {
    marginTop: "15%",
    fontSize: 24,
    fontFamily: "Lato_Black",
  },
  loginContainer: {
    marginTop: "10%",
    width: "85%",
    alignSelf: "center",
  },
  input: {
    marginTop: 10,
    height: 50,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
  },
  savePasswordSec: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
