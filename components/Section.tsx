import { useRouter } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";

interface Props {
  title: string;
  url: string;
}

export default function Section(props: Props) {
  const { title, url } = props;
  const router = useRouter();

  return (
    <View className="flex flex-row items-center justify-between mt-12 mb-5 px-[28px]">
      <Text className="text-[16px] font-semibold">{title}</Text>
      <TouchableOpacity onPress={() => router.push(`${url}`)}>
        <Text className="text-[#6798E1] font-medium text-[14px]">View all</Text>
      </TouchableOpacity>
    </View>
  );
}
