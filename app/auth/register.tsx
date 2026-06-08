import AuthHeader from "@/components/AuthHeader";
import InputForm from "@/components/InputForm";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View className="flex-1 bg-black">
      <StatusBar style="light" animated={true} />

      <View className="flex-1 justify-end">
        <View className="min-h-[90%] w-full rounded-t-[40px] bg-white px-8 pt-6">
          <AuthHeader
            title="Create Your Account"
            subtitle="Create account for exploring news"
          />

          <View className="mt-4">
            <InputForm
              label="Full Name"
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
            >
              <Ionicons
                name="person"
                size={20}
                color="#D70404"
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />
            </InputForm>

            <InputForm
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            >
              <Ionicons
                name="lock-closed"
                size={20}
                color="#D70404"
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />
            </InputForm>

            <InputForm
              label="Confirm Password"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            >
              <Ionicons
                name="lock-closed"
                size={20}
                color="#D70404"
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />
            </InputForm>
          </View>
        </View>
      </View>
    </View>
  );
}
