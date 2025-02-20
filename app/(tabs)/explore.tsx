import { DownloadPicture } from "@/components/BottomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpapers";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
            headerImage={
              <Image
                style={{ flex: 1 }}
                source={{
                  uri: "https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                }}
              />
            }
            // scrollEnabled={!selectedWallpaper}
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
