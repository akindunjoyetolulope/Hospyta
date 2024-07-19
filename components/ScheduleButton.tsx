import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function ScheduleButton() {
  return (
    <TouchableOpacity className="flex flex-row items-center justify-between mt-6 px-6 h-[52px] rounded-[13px] bg-[#F4F4F4]">
      <Ionicons name="calendar-outline" size={24} color="black" />
      <Text className="text-[12px] font-medium">
        Schedule appointment calendar
      </Text>
      <AntDesign name="arrowright" size={24} color="black" />
    </TouchableOpacity>
  );
}
