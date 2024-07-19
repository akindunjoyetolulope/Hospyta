import { View, Text, Image, StyleSheet } from "react-native";
import medicineImgTwo from "@/assets/medicine2.png";

export const medicineData = Array(4).fill({
  text: "Panadol (50mg) 200ta.",
  price: "N15,000",
});

interface Props {
  name: string;
  price: string;
}

export default function MedicineCard(props: Props) {
  const { name, price } = props;

  return (
    <View
      className="p-[12px] mr-[12px] rounded-[16px] border divide-solid border-[#f1eeee]"
      style={styles.foregroundCard}
    >
      <View>
        <Image source={medicineImgTwo} className="" />
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
