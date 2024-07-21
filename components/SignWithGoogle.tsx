import { View, Text, StyleSheet, Image } from "react-native";

export default function SignWithGoogle() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.line} />
        <Text className="font-normal mx-4 text-[16px] text-center">
          Or sign in with
        </Text>
        <View style={styles.line} />
      </View>

      <View
        style={styles.container}
        className="py-4 justify-center mt-5 bg-[#fff] rounded-[16px]"
      >
        <Image source={require("@/assets/google-logo.png")} />
        <Text className="ml-4 font-medium text-[#555555] text-[16px]">
          Sign In with Google
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    textAlign: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
});
