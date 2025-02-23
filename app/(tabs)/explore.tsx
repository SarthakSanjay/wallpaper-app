import { DownloadPicture } from "@/components/BottomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ImageCarousel from "@/components/ImageCarousel";

export default function () {
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null,
  );
  const wallpaper = useWallpaper();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "brown" }}>
        <View style={{ flex: 1 }}>
          <ParallaxScrollView
            headerBackgroundColor={{ dark: "black", light: "white" }}
            headerImage={<ImageCarousel />}
          >
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
          </ParallaxScrollView>
          {selectedWallpaper && (
            <DownloadPicture
              onClose={() => setSelectedWallpaper(null)}
              wallpaper={selectedWallpaper}
            />
          )}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
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
