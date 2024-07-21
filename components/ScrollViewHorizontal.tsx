import { ScrollView } from "react-native";

export default function ScrollViewHorizontal({ children }: any) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}
