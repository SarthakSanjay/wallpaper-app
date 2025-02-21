import React, { useCallback, useRef } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  Button,
  View,
  useColorScheme,
  Pressable,
  Text,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const insets = useSafeAreaInsets();
  const theme = useColorScheme() ?? "light";

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // Calculate snap points based on screen height and safe area
  const snapPoints = React.useMemo(() => {
    return [SCREEN_HEIGHT - insets.top];
  }, [insets.top]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      onClose={onClose}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
      style={[styles.container]}
      index={0}
      android_keyboardInputMode="adjustPan"
    >
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView
          style={{
            flex: 1,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <Image
            source={{ uri: wallpaper.url }}
            style={styles.image}
            // resizeMode="contain"
          />
          <View style={styles.topbar}>
            <Pressable onPress={onClose}>
              <Ionicons
                name={"close"}
                size={24}
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
            </Pressable>

            <ThemedView
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
                backgroundColor: "transparent",
              }}
            >
              <Ionicons
                name={"heart"}
                size={24}
                color={theme === "dark" ? Colors.dark.icon : Colors.light.icon}
              />
              <Ionicons
                name={"share-social-outline"}
                size={24}
                color={theme === "dark" ? Colors.dark.icon : Colors.light.icon}
              />
            </ThemedView>
          </View>
          <ThemedView style={styles.titleContainer}>
            <ThemedText
              style={{
                fontSize: 24,
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              {wallpaper.name}
            </ThemedText>
          </ThemedView>
          <Pressable
            // style={styles.button}
            style={({ pressed }) => ({
              backgroundColor:
                theme === "dark"
                  ? Colors.light.background
                  : Colors.dark.background,
              ...styles.button, // Spread the button styles after the dynamic styles
            })}
            onPress={async () => {
              let date = new Date().getTime();
              let fileUri = FileSystem.documentDirectory + `${date}.jpg`;

              try {
                await FileSystem.downloadAsync(wallpaper.url, fileUri);
                const response =
                  await MediaLibrary.requestPermissionsAsync(true);
                if (response.granted) {
                  MediaLibrary.createAssetAsync(fileUri);
                  alert("Image saved");
                } else {
                  console.error("permission not granted");
                }
              } catch (err) {
                console.log("FS Err: ", err);
              }
            }}
          >
            {({ pressed }) => (
              <ThemedText
                style={{
                  color:
                    theme === "dark" ? Colors.light.text : Colors.dark.text,
                }}
              >
                Download
              </ThemedText>
            )}
          </Pressable>
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    zIndex: 50,
    position: "absolute",
    left: 0,
    right: 0,
    marginTop: 30,
  },
  contentContainer: {
    flex: 1,
    paddingInline: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "transparent",
  },
  image: {
    height: "60%",
    // width: "",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    margin: 0,
  },
  button: {
    width: "50%",
    marginInline: "auto",
    marginTop: 10,
    // backgroundColor: "black",
    borderRadius: 10,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topbar: {
    position: "absolute",
    backgroundColor: "transparent",
    width: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
