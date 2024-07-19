import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

import logoHospytaWithBlackText from "@/assets/hospyta-logo-white.png";
import onboardingImageTwo from "@/assets/onboarding4.png";

import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";

export default function App() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      <ImageBackground
        source={onboardingImageTwo}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.0)", "rgba(0, 0, 0, 0.8)"]}>
          <Image source={logoHospytaWithBlackText} className="mt-10" />

          <View className="mb-36">
            <View className="flex flex-col justify-between mt-[50px]">
              <Text className="text-white text-3xl leading-10 font-medium">
                Inspire Your Medical Practice Through the Power of Collaboration
                and Knowledge Sharing.
              </Text>
              <Text className="text-[#f02c60]">With Hospyta</Text>
            </View>
            <View className="mt-5">
              <CustomButton
                onPress={() => router.push("/sign-in")}
                title="Sign In"
                buttonStyle={"primary"}
              />

              <CustomButton
                onPress={() => router.push("/sign-up")}
                title="Sign Up"
                buttonStyle={"secondary"}
              />
            </View>
          </View>

          <StatusBar style="light" />
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
