import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NavBar({ navigation }: any) {
  return (
    <SafeAreaView>
      <View className="flex flex-row items-center justify-between px-[28px] py-5 bg-[#fff]">
        <View className="flex flex-row">
          <Image source={require("@/assets/profile-icon.png")} className="" />

          <View className="ml-2">
            <Text className="text-[18px] font-semibold">Welcome Dr,</Text>
            <Text className="text-[10px] text-[#6B6B6B] font-normal">
              What do you want to {"\n"}do today?,
            </Text>
          </View>
        </View>

        <View className="flex flex-row gap-[17px]">
          <TouchableOpacity className="border divide-solid border-[#F4F4F4] p-4 rounded-full">
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            className="border divide-solid p-4 rounded-full ml-2 border-[#F4F4F4]"
          >
            <Image
              source={require("@/assets/hambuger-icon.png")}
              className=""
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
