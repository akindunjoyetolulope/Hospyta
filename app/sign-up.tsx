import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignWithGoogle from "@/components/SignWithGoogle";
import InputField from "@/components/InputField";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GoBack from "@/components/GoBack";

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <View className="px-[18px] h-full bg-[#F7F8FA]">
      <SafeAreaView className="flex-1 justify-between">
        <GoBack />
        <View className="mt-4">
          <Text className="text-center text-[32px]">Register Account</Text>
          <Text className="mt-[16px] font-light text-center text-[16px] text-[#717171]">
            Fill your details or continue with social media
          </Text>

          <View className="mt-5">
            <InputField
              onChangeText={setFirstName}
              placeholder="First name"
              value={firstName}
            />

            <InputField
              onChangeText={setLastName}
              placeholder="Last Name"
              value={lastName}
            />

            <InputField
              onChangeText={setEmail}
              placeholder="example@gmail.com"
              value={email}
              prefixIcon={
                <MaterialCommunityIcons
                  name="email-box"
                  size={24}
                  color="black"
                />
              }
            />

            <InputField
              onChangeText={setPassword}
              placeholder="**********"
              value={password}
              suffixIcon
            />
          </View>

          <View>
            <Text className="mb-5 mt-2 font-normal text-[#2B2B2B]">
              I accept all the Terms & Conditions
            </Text>
          </View>

          <CustomButton
            onPress={() => router.push("(drawer)/dashboard")}
            title="Register"
            buttonStyle="primary"
          />
          <SignWithGoogle />
        </View>

        <View>
          <Text className="text-center mb-5">
            Already have account? <Link href="/sign-in">Sign in</Link>
          </Text>
        </View>

        <StatusBar style="dark" />
      </SafeAreaView>
    </View>
  );
};

export default SignUp;
