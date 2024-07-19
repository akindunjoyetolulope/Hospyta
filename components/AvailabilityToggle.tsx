import { useState } from "react";
import { View, Text, Switch } from "react-native";

export default function AvailabilityToggle() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View className="flex flex-row items-center justify-between px-6 h-[52px] rounded-[13px] bg-[#F8FEF5]">
      <Text className="text-[#159900] text-[14px] font-medium">
        I am Available
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#159900" }}
        thumbColor="#ffff"
        ios_backgroundColor="#767577"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
