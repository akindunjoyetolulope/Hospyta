import { View, Image, Text } from "react-native";

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
    <View className="flex flex-row gap-3 mb-5">
      <Image source={require("@/assets/newdfeed1.png")} />
      <View className="pb-10 w-[217px] border-b divide-solid border-[#DBDBDB]">
        <Text className="text-[16px] text-[#DBDBDB] font-medium">{title}</Text>
        <Text className="text-[18px] font-medium mt-3">{description}</Text>
      </View>
    </View>
  );
}
