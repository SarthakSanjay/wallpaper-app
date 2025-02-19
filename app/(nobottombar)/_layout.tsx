import { Slot } from "expo-router";
import { SafeAreaView, View, Text } from "react-native";

export default function () {
  return (
    <SafeAreaView>
      <Slot />
      <View
        style={{
          backgroundColor: "red",
        }}
      >
        <Text>No Bottom Bar</Text>
      </View>
    </SafeAreaView>
  );
}
