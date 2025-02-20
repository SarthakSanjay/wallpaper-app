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

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Ionicons
              name={"heart"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
            <Ionicons
              name={"share-social-outline"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            {wallpaper.name}
          </Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={async () => {
            let date = new Date().getTime();
            let fileUri = FileSystem.documentDirectory + `${date}.jpg`;

            try {
              await FileSystem.downloadAsync(wallpaper.url, fileUri);
              const response = await MediaLibrary.requestPermissionsAsync(true);
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
          <Button title="Download" color={"transparent"}></Button>
        </Pressable>
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
    backgroundColor: "#272829",
    paddingInline: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    backgroundColor: "black",
    borderRadius: 10,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topbar: {
    position: "absolute",
    width: "100%",
    // backgroundColor: "transparent",
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
