import React from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  inputStyles?: string;
  onChangeText: VoidFunction;
  placeholder: string;
  value: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: boolean;
}

export default function InputField(props: Props) {
  const {
    onChangeText,
    placeholder,
    prefixIcon,
    suffixIcon = false,
    value,
  } = props;

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      {prefixIcon ? (
        prefixIcon
      ) : (
        <Ionicons name="person-outline" size={24} color="black" />
      )}

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={showPassword}
      />

      {suffixIcon && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <MaterialCommunityIcons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});
