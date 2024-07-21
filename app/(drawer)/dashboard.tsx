import { View, ScrollView } from "react-native";
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
import { StatusBar } from "expo-status-bar";
import ScrollViewHorizontal from "@/components/ScrollViewHorizontal";

export default function Dashboard() {
  return (
    <View className="bg-[#fff]">
      <ScrollView>
        <View className="pl-[18px] mt-5">
          <ScrollViewHorizontal>
            <AppointmentCard />
            <AppointmentCard />
          </ScrollViewHorizontal>
        </View>

        <View className="px-[28px] mt-12">
          <AvailabilityToggle />

          <ScheduleButton />
        </View>

        <Section title="Community Feed" url="" />
        <View className="pl-[28px] mt-3">
          <ScrollViewHorizontal>
            <CommunityFeed />
            <CommunityFeed />
            <CommunityFeed />
          </ScrollViewHorizontal>

          <View className="pr-[28px]">
            <CommunityFeedNav />
          </View>
        </View>

        <Section title="Shop for Medical Devices" url="" />
        {medicineDeviceData && (
          <View className="pl-[28px] mt-2">
            <ScrollViewHorizontal>
              {medicineDeviceData.flatMap((data, index) => (
                <MedicineDeviceCard
                  name={data.text}
                  price={data.price}
                  key={index}
                />
              ))}
            </ScrollViewHorizontal>
          </View>
        )}

        <Section title="Shop for Medical" url="" />
        <View className="pl-[28px] mt-2">
          {medicineData && (
            <ScrollViewHorizontal>
              {medicineData.flatMap((data, index) => (
                <MedicineCard name={data.text} price={data.price} key={index} />
              ))}
            </ScrollViewHorizontal>
          )}
        </View>

        <View className="px-[28px] mt-10">
          <AdBanner />
        </View>

        <Section title="News Feeds" url="" />
        <View className="px-[28px]">
          {newsFeedData.flatMap((data, index) => (
            <NewsCard
              title={data.title}
              description={data.description}
              key={index}
            />
          ))}
        </View>

        <View className="h-[100px]"></View>
        <StatusBar style="dark" />
      </ScrollView>
    </View>
  );
}
