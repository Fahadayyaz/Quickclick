import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to Home after 4 seconds
    const timer = setTimeout(() => {
      navigation.replace("Welcome");
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Image
          source={require("./../assets/splash.png")}
          style={styles.splashImage}
        />
        <ActivityIndicator
          size="large"
          color="#1E1E1E"
          style={styles.loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Center the content vertically
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center", // Center the content
  },
  splashImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    position: "absolute",
    alignSelf: "center",
  },
});
