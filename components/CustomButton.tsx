import { Text, Pressable } from "react-native";

interface Props {
  onPress: VoidFunction;
  title: string;
  buttonStyle: "primary" | "secondary";
  containerStyle?: string;
}

export default function CustomButton(props: Props) {
  const {
    onPress,
    title,
    containerStyle = "",
    buttonStyle = "primary",
  } = props;

  let btnStyle =
    buttonStyle === "primary"
      ? " bg-[#4425F5]"
      : " border-[#fff] border divide-solid rounded-[8px]";

  return (
    <Pressable
      className={`items-center justify-center mb-8 py-5 rounded-[8px] ${btnStyle} ${containerStyle}`}
      onPress={onPress}
    >
      <Text className="text-[16px] font-medium text-white">{title}</Text>
    </Pressable>
  );
}
