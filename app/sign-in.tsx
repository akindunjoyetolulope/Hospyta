import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import SignWithGoogle from "@/components/SignWithGoogle";
import { Link, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GoBack from "@/components/GoBack";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="px-[18px] h-full bg-[#F7F8FA]">
      <SafeAreaView className="flex-1 justify-between">
        <GoBack />
        <View className="mt-4">
          <Text className="text-center text-[32px]">Hello Dr!</Text>
          <Text className="mt-[16px] font-light text-center text-[16px] text-[#717171]">
            Fill your details or continue with social media
          </Text>

          <View className=" mt-5">
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

          <Text className="mb-5 text-right mt-2 font-normal text-[#2B2B2B]">
            Forgot password ?
          </Text>

          <CustomButton
            onPress={() => router.push("(drawer)/dashboard")}
            title="Sign In"
            buttonStyle="primary"
          />
          <SignWithGoogle />
        </View>

        <View>
          <Text className="text-center mb-5">
            Don’t have account? <Link href="/sign-up">Register</Link>
          </Text>
        </View>

        <StatusBar style="dark" />
      </SafeAreaView>
    </View>
  );
};

export default SignIn;