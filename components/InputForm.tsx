import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface Props extends TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  children?: React.ReactNode;
}

export default function InputForm({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  children,
  ...props
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="mb-2">
      <Text className="font-poppinsMedium text-lg">{label}</Text>
      <View className="mt-2">
        <TextInput
          style={[styles.input, isFocused ? styles.inputFocused : null]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          placeholderTextColor="#6B7280"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          cursorColor="#D70404"
          {...props}
        />
        {children}
        {secureTextEntry && (
          <Ionicons
            name="eye"
            size={20}
            color="black"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
    backgroundColor: "#F8F7FB",
    paddingHorizontal: 40,
    paddingVertical: 16,
    color: "#4B5563",
    fontFamily: "Poppins-Regular",
    borderWidth: 1,
    borderColor: "transparent",
    fontSize: 16,
  },
  inputFocused: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D70404",
  },
});
