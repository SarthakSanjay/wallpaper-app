import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Library() {
  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          backgroundColor: "greenyellow",
        }}
      >
        <Text>Library</Text>
      </View>
    </SafeAreaView>
  );
}
