import { View, Text, Image, StyleSheet } from "react-native";

export const medicineDeviceData = Array(4).fill({
  text: "Statoscope",
  price: "N15,000",
});

interface Props {
  name: string;
  price: string;
}

export default function MedicineDeviceCard(props: Props) {
  const { name, price } = props;

  return (
    <View
      className="p-[12px] mr-[12px] rounded-[16px] border divide-solid border-[#f1eeee]"
      style={styles.foregroundCard}
    >
      <View>
        <Image source={require("@/assets/medicine-device.png")} className="" />
      </View>
      <Text className="text-[#424242] text-[10px] font-bold mt-2">{name}</Text>
      <Text className="text-[12px] font-bold mt-2">{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  foregroundCard: {
    elevation: 5,
    shadowColor: "#fdfdfd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
