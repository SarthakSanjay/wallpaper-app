import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function () {
  return (
    <View>
      <Text>Explore</Text>
      <Link href={"/accountinfo"}>
        <Text>Accounts Info</Text>
      </Link>
    </View>
  );
}
