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
  TouchableOpacity, // Import TouchableOpacity
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  // email and password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // checkbox state here
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };
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
        <Text style={styles.subHeading}>
          Yay! You're back! Thanks for shopping with us. We have excited deals
          and promotions going on, grab your pick now!
        </Text>

        <Text style={styles.loginText}>LOG IN</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.loginContainer}
        >
          <Text
            style={{
              fontFamily: "Lato_Black",
              fontSize: 14,
              marginTop: 10,
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
            value={email} // email value state se bind kar rahe hain
            onChangeText={(text) => setEmail(text)} // email ko update karte hain jab user type kare
            onFocus={() => {
              setBorderColor("#000000");
              setTextColor("#303030"); // Text color ko change karte hain jab user type kare
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
            value={password} // password value state se bind kar rahe hain
            onChangeText={(text) => setPassword(text)} // password ko update karte hain jab user type kare
            onFocus={() => {
              setPasswordBorderColor("#000000");
              setPasswordTextColor("#303030");
            }}
            onBlur={() => {
              setPasswordBorderColor("#D2D2D2");
              setPasswordTextColor("#303030");
            }}
          />

          {/* Save password and checkbox section */}
          <View style={styles.savePasswordSec}>
            {/* Custom checkbox */}
            <TouchableOpacity
              style={[
                styles.checkbox,
                { backgroundColor: isChecked ? "#fff" : "#fff" },
              ]}
              onPress={handleCheckboxToggle}
            >
              {isChecked && (
                <Ionicons name="checkmark" size={20} color="#000" />
              )}
            </TouchableOpacity>

            <Text
              style={{
                marginLeft: -10,
                fontFamily: "Lato_Regular",
                fontSize: 12,
                width: "50%",
              }}
            >
              {isChecked ? "Password Saved" : "Save Password"}
            </Text>
            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <Text
                style={{
                  fontFamily: "Lato_Bold",
                  fontSize: 12,
                }}
              >
                Forgot Password?
              </Text>
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
  subHeading: {
    marginTop: "10%",
    width: "80%",
    fontFamily: "Lato_Bold",
    fontSize: 14,
  },
  loginText: {
    marginTop: "20%",
    fontFamily: "Lato_Black",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  loginContainer: {
    marginTop: "10%",
    width: "85%",
    alignSelf: "center",
  },
  inputLabel: {
    fontFamily: "Lato_Black",
    fontSize: 14,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#D2D2D2",
    color: "#303030",
  },
  savePasswordSec: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#D2D2D2",
    borderWidth: 1,
  },
});
