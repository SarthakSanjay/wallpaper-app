import { Wallpaper } from "@/hooks/useWallpapers";
import {
  Image,
  View,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function ImageCard({
  wallpaper,
  setPictureOpen,
}: {
  wallpaper: Wallpaper;
  setPictureOpen: (v: boolean) => void;
}) {
  const theme = useColorScheme() ?? "light";
  return (
    <View>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <View style={styles.labelContainer}>
        <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
        <View style={styles.iconContainer}>
          <Ionicons
            name="heart"
            size={18}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: 200,
    borderRadius: 20,
  },
  label: {
    color: "white",
  },
  labelContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
