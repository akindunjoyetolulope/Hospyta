import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: any;
  className?: string;
}

const Content = (props: Props) => {
  const { children, className = "" } = props;
  return (
    <SafeAreaView style={[styles.container]} className={className}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Approximate conversion of TailwindCSS px-5
    paddingVertical: 12, // Approximate conversion of TailwindCSS py-3
    justifyContent: "space-between",
  },
});

export default Content;
