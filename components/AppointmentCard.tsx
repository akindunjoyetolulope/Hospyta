import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppointmentCard() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundCard} />
      <View
        style={styles.foregroundCard}
        className="w-[334px] mr-5 px-6 pt-6 pb-3 rounded-[15.08px] bg-[#643FDB]"
      >
        <View className="flex flex-row ">
          <View className="flex flex-col rounded-[15.08px] w-[50px] h-[83px] bg-[#7A5BE0] text-white p-1 mr-[13px]">
            <Text className="text-[17.24px] font-medium text-white text-center">
              29
            </Text>
            <Text className="text-[12.93px] font-normal text-white text-center">
              Tue
            </Text>
            <View className="h-[1px] bg-[#ffffff] mt-1" />
            <Text className="text-[8px] mt-2 font-medium text-white text-center">
              2:00PM
            </Text>
          </View>
          <View className="flex flex-col gap-[8px]">
            <Text className="text-[12.93px] font-normal text-white">
              Pending appointment
            </Text>
            <Text className="text-[17.24px] font-semibold text-white">
              Tanvir Ahmed
            </Text>
            <Text className="text-[12.93px] font-normal text-[#C9BCF2]">
              High Blood Pressure
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center px-4 justify-end">
          <View className="flex flex-row items-center ">
            <MaterialIcons name="timer" size={15} color="white" />
            <Text className="text-[#fff] ml-1 mr-3 text-[10px] font-medium">
              00:01:20
            </Text>
          </View>

          <TouchableOpacity className="flex flex-row items-center justify-between w-[102px] bg-white rounded-full">
            <Text className="text-[#643FDB] text-[10px] font-medium px-2 py-1">
              View Patient
            </Text>
            <AntDesign name="arrowright" size={15} color="#643FDB" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  backgroundCard: {
    width: "85%",
    height: 100,
    backgroundColor: "#C8B6FF",
    borderRadius: 10,
    position: "absolute",
    top: 55,
    left: 18,
  },
  foregroundCard: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
