import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
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
});
