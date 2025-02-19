import { DownloadPicture } from "@/components/BottomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpapers";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  const [pictureOpen, setPictureOpen] = useState(false);
  const wallpaper = useWallpaper();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "brown",
      }}
    >
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
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpaper.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard wallpaper={item} setPictureOpen={setPictureOpen} />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpaper.filter((_, index) => index % 2 === 1)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard wallpaper={item} setPictureOpen={setPictureOpen} />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
        {pictureOpen && (
          <DownloadPicture onClose={() => setPictureOpen(false)} />
        )}
      </ParallaxScrollView>
    </SafeAreaView>
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

// <View
//         style={{
//           flex: 1,
//           backgroundColor: "gold",
//         }}
//       >
//         <Text>Accounts</Text>
//         <Button
//           title="Open Bottom Sheet"
//           onPress={() => {
//             setPictureOpen(true);
//           }}
//         ></Button>
//
//         {pictureOpen && (
//           <DownloadPicture onClose={() => setPictureOpen(false)} />
//         )}
//       </View>
