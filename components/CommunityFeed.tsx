import { View, Image } from "react-native";
import community from "@/assets/community1.png";

export default function CommunityFeed() {
  return (
    <View className="mr-5">
      <Image source={community} />
    </View>
  );
}
