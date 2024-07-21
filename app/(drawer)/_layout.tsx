import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import DrawerContents from "@/components/DrawerContents";
import { AntDesign } from "@expo/vector-icons";
import NavBar from "@/components/NavBar";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={DrawerContents}
        screenOptions={{
          drawerActiveBackgroundColor: "#f7f5fe",
          drawerActiveTintColor: "#000",
          drawerPosition: "right",
          headerShown: true,

          header: ({ navigation }) => <NavBar navigation={navigation} />,
        }}
        initialRouteName="dashboard"
      >
        <Drawer.Screen
          name="dashboard" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Live support",
            drawerIcon: () => (
              <AntDesign name="minuscircleo" size={24} color="" />
            ),
            drawerPosition: "right",
            drawerType: "slide",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
