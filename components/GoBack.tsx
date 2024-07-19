import { useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function GoBack() {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/")}
      className="flex items-center justify-center rounded-[8px] mt-10 w-[44px] h-[44px] border border-[#2B2B22] divide-solid"
    >
      <Text>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Text>
    </TouchableOpacity>
  );
}
