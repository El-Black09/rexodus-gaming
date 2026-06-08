import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { RexodusLogo } from "../constants/logo";

interface Props {
  title: string;
  subtitle: string;
}

export default function AuthHeader({ title, subtitle }: Props) {

  return (
    <>
      <View className="items-center">
        <View className="mb-8 h-1.5 w-16 rounded-full bg-[#DFE2EB]" />
      </View>

      <View className="items-center">
        <Text
          className="text-center text-4xl text-black font-poppinsSemiBold"
        >
          {title}
        </Text>
        <Text
          className="mt-3 text-center text-lg text-[#969AA8] font-poppinsRegular"
        >
          {subtitle}
        </Text>
        <View className="mt-5">
          <Image
            source={RexodusLogo}
            contentFit="cover"
            style={{ width: 50, aspectRatio: 1 }}
          />
        </View>
        <Text
          className="text-[#020204] text-5xl mt-5 font-bebasNeue"
        >
          Rexodus gaming
        </Text>
      </View>
    </>
  );
}
