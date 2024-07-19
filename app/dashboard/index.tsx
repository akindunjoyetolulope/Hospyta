import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profileIcon from "@/assets/profile-icon.png";
import hambuger from "@/assets/hambuger-icon.png";
import { Ionicons } from "@expo/vector-icons";
import AppointmentCard from "@/components/AppointmentCard";
import AvailabilityToggle from "@/components/AvailabilityToggle";
import ScheduleButton from "@/components/ScheduleButton";
import Section from "@/components/Section";
import CommunityFeed from "@/components/CommunityFeed";
import CommunityFeedNav from "@/components/CommunityFeedNav";
import MedicineCard, { medicineData } from "@/components/MedicineCard";
import MedicineDeviceCard, {
  medicineDeviceData,
} from "@/components/MedicineDeviceCard";
import AdBanner from "@/components/AdBanner";
import NewsCard, { newsFeedData } from "@/components/NewsCard";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="mt-5">
        <View className="flex flex-row items-center justify-between px-[28px] pb-5">
          <View className="flex flex-row">
            <Image source={profileIcon} className="" />

            <View className="ml-2">
              <Text className="text-[18px]">Welcome Dr, hgfddfg</Text>
              <Text className="text-[10px] text-[#6B6B6B] font-light">
                What do you want {"\n"}to do today?,
              </Text>
            </View>
          </View>

          <View className="flex flex-row gap-[17px]">
            <TouchableOpacity className="border divide-solid border-[#F4F4F4] p-4 rounded-full">
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="border divide-solid p-4 rounded-full ml-2 border-[#F4F4F4]">
              <Image source={hambuger} className="" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View className="pl-[18px] mt-5">
            <ScrollView horizontal>
              <AppointmentCard />
              <AppointmentCard />
            </ScrollView>
          </View>

          <View className="px-[28px] mt-12">
            <AvailabilityToggle />

            <ScheduleButton />
          </View>

          <Section title="Community Feed" url="#" />
          <View className="pl-[28px] mt-3">
            <ScrollView horizontal>
              <CommunityFeed />
              <CommunityFeed />
              <CommunityFeed />
            </ScrollView>

            <View className="pr-[28px]">
              <CommunityFeedNav />
            </View>
          </View>

          <Section title="Shop for Medical Devices" url="#" />
          {medicineDeviceData && (
            <View className="pl-[28px] mt-2">
              <ScrollView horizontal>
                {medicineDeviceData.flatMap((data, index) => (
                  <MedicineDeviceCard
                    name={data.text}
                    price={data.price}
                    key={index}
                  />
                ))}
              </ScrollView>
            </View>
          )}

          <Section title="Shop for Medical" url="#" />
          <View className="pl-[28px] mt-2">
            {medicineData && (
              <ScrollView horizontal>
                {medicineData.flatMap((data, index) => (
                  <MedicineCard
                    name={data.text}
                    price={data.price}
                    key={index}
                  />
                ))}
              </ScrollView>
            )}
          </View>

          <View className="px-[28px] mt-10">
            <AdBanner />
          </View>

          {/* <Section title="News Feeds" url="#" />
          <View className="px-[28px]">
            <View className="border-b divide-solid">
              {newsFeedData.flatMap((data, index) => (
                <NewsCard
                  title={data.title}
                  description={data.description}
                  key={index}
                />
              ))}
            </View>
          </View> */}

          <View className="h-[100px]"></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollView: {
    marginBottom: 20,
  },
});
