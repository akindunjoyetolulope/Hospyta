import { View, Text, Image, StyleSheet } from "react-native";
import adsBanner from "@/assets/adbanner.png";

export default function AdBanner() {
  return (
    <View
      style={styles.shadow}
      className="flex flex-col bg-[#4425F5] px-6 py-8 rounded-[18.19px]"
    >
      <View className="flex flex-row justify-between items-start">
        <Text className="text-[26.7px] text-white">Amartem {"\n"}2201</Text>
        <Text className="text-[20.55px] font-bold text-white">
          N2000 {"\n"}
          <Text className="text-[13.55px] font-normal line-through text-[#DBDBDB]">
            N12000
          </Text>
        </Text>
      </View>
      <View>
        <Text className="text-[12.55px] text-white font-normal">
          For malaria and Fever {"\n"}made for both.
        </Text>
      </View>
      <View className="flex items-center mt-14">
        <Image source={adsBanner} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 9,
    shadowColor: "#3E64FF",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
});
