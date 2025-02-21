import { FlatList, StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import ImageCard from "./ImageCard";
import { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { DownloadPicture } from "./BottomSheet";
export function SplitView({ wallpaper }: { wallpaper: Wallpaper[] }) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null,
  );

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.innerContainer}>
          <FlatList
            data={wallpaper.filter((_, index) => index % 2 === 0)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  wallpaper={item}
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.name}
            scrollEnabled={!selectedWallpaper}
          />
        </ThemedView>
        <ThemedView style={styles.innerContainer}>
          <FlatList
            data={wallpaper.filter((_, index) => index % 2 === 1)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  wallpaper={item}
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.name}
            scrollEnabled={!selectedWallpaper}
          />
        </ThemedView>
      </ThemedView>
      {selectedWallpaper && (
        <DownloadPicture
          onClose={() => setSelectedWallpaper(null)}
          wallpaper={selectedWallpaper}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: 10,
  },
  innerContainer: {
    flex: 1,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
