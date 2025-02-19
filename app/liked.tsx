import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Liked() {
  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          backgroundColor: "#FF204E",
        }}
      >
        <Text>Library</Text>
      </View>
    </SafeAreaView>
  );
}
