import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function DrawerContents(props: any) {
  return (
    <View className="flex-1">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#4425F5" }}
      >
        <View className="flex items-end justify-end px-2">
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Entypo name="cross" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row  items-center gap-2  px-5 mb-3">
          <Image source={require("@/assets/profile-icon.png")} />

          <View>
            <Text className="text-[18px] text-white">Welcome Dr</Text>
            <Text className="text-[10px]  text-white font-light">
              What do you want to do today?
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
          <DrawerItem
            label="Wallet"
            onPress={() => props.navigation.closeDrawer()}
            icon={() => <AntDesign name="wallet" size={24} color="black" />}
          />
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
