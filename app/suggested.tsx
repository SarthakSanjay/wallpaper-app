import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Suggested() {
  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          backgroundColor: "#F6B17A",
        }}
      >
        <Text>Library</Text>
      </View>
    </SafeAreaView>
  );
}
