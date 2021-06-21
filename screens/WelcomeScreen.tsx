import React, { FC } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import background from "../assets/images/background.png";
import nonContactDelivery from "../assets/images/non-contact-delivery.png";
import { Text, View } from "../components/Themed";

export const WELCOME_SCREEN = "WelcomeScreen";

const WelcomeScreen: FC = () => (
  <View style={styles.container}>
    <Image source={background} style={styles.image} />
    <View style={styles.sheetContainer}>
      <View style={styles.sheetContent}>
        <Image source={nonContactDelivery} resizeMode={"contain"} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Non-Contact</Text>
          <Text style={styles.title}>Deliveries</Text>
        </View>
        <Text style={styles.textSecondary}>
          When placing an order, select the option "Contactless delivery" and
          the courier will leave your order at the door.
        </Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>Order now</Text>
        </View>
        <Text style={[styles.textSecondary, styles.uppercase]}>Dismiss</Text>
      </View>
    </View>
  </View>
);

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#A259FF",
  },
  textSecondary: {
    color: "#9586A8",
    fontSize: 18,
    textAlign: "center",
  },
  image: {
    flex: 1,
    height: Dimensions.get('screen').height,
    resizeMode: "cover",
    position: "absolute",
  },
  logo: {
    backgroundColor: "transparent",
    height: 90,
    borderRadius: 100,
  },
  sheetContainer: {
    height: Dimensions.get("screen").height * 0.55,
    width: "100%",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: "#F6F5F5",
    paddingHorizontal: 20,
  },
  sheetContent: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#2D0C57",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  uppercase: {
    textTransform: "uppercase",
  },
  titleContainer: {
    marginVertical: 16,
    backgroundColor: "transparent",
  },
  // Button styles
  buttonContainer: {
    borderRadius: 8,
    backgroundColor: "#0BCE83",
    paddingVertical: 14,
    alignItems: "center",
    width: "100%",
    marginVertical: 36,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
  },
});
