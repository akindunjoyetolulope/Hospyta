import { TouchableOpacity, View, Text } from "react-native";
import { navlinks } from "@/constants/nav-links";

export default function CommunityFeedNav() {
  return (
    <View className="flex flex-row items-center justify-between gap-[8px] mt-5">
      {navlinks.flatMap((navlink, index) => (
        <TouchableOpacity
          className={`flex flex-row items-center justify-center rounded-[12px] p-4 ${
            navlink.active ? "bg-[#ece9fe]" : ""
          }`}
          key={index}
        >
          {navlink.icon}
          {navlink.active && (
            <Text className="ml-2 font-bold text-[14px] text-[#4425F5]">
              {navlink.label}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}
