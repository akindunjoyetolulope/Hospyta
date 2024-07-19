import { View, Image, Text } from "react-native";
import newfeedimg from "@/assets/newdfeed1.png";

export const newsFeedData = [
  {
    title: "r/worldnews",
    description: "Getting The Upper Hand On Asthma Allergy",
  },
  {
    title: "r/worldnews",
    description: "Skin Cancer Prevention 5 Ways To Protect Yourself ",
  },
];

interface Props {
  title: string;
  description: string;
}

export default function NewsCard(props: Props) {
  const { title, description } = props;

  return (
    <View className="flex-1 flex-row gap-3 mb-5">
      <Image source={newfeedimg} />
      <View className="flex flex-col pb-20 border-b divide-solid border-[#DBDBDB]">
        <Text className="text-[16px] text-[#DBDBDB] font-medium">{title}</Text>
        <Text className="text-[18px] font-medium mt-3">
          Getting The Upper Hand On Asthma Allergy Getting The Upper Hand On
          Asthma Allergy Getting The Upper Hand On Asthma Allergy
        </Text>
      </View>
    </View>
  );
}
