import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import onboardingOne from "@/assets/onboarding1.png";
import onboardingTwo from "@/assets/onboarding2.png";
import onboardingThree from "@/assets/onboarding3.png";
import onboardingFour from "@/assets/onboarding4.png";

export default function App() {
  const router = useRouter();

  const images = [
    onboardingOne,
    onboardingTwo,
    onboardingThree,
    onboardingFour,
  ];
  const text = [
    "Convenient Telehealth: Virtual Consultations and Follow-up... Anytime, Anywhere",
    "Logistics.... And We'll Deliver it all  Too, In Record Time.",
    "Inspire Your Medical Practice Through the Power of Collaboration and Knowledge Sharing.",
    "Prescriptions Plus.....Your One-Stop Shop For Medicines, Equipment and More",
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex-1 bg-black">
      <ImageBackground
        source={images[currentImageIndex]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.0)", "rgba(0, 0, 0, 0.8)"]}>
          {currentImageIndex === 2 ? (
            <Image
              source={require("@/assets/hospyta-logo-black.png")}
              className="mt-10"
            />
          ) : (
            <Image
              source={require("@/assets/hospyta-logo-white.png")}
              className="mt-10"
            />
          )}

          <View className="mb-36">
            <View className="flex flex-col justify-between mt-[50px]">
              <Text className="text-white text-3xl leading-10 font-medium">
                {text[currentImageIndex]}
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
