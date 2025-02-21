import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ThemedView } from "@/components/ThemedView";
import { SplitView } from "@/components/SplitView";
import {
  useLibraryWallpaper,
  useLikedWallpaper,
  useSuggestedWallpaper,
  useWallpaper,
} from "@/hooks/useWallpapers";

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library}></Tab.Screen>
      <Tab.Screen name="Liked" component={Liked}></Tab.Screen>
      <Tab.Screen name="Suggested" component={Suggested}></Tab.Screen>
    </Tab.Navigator>
    // <ThemedSafeAreaView style={styles.container}>
    // </ThemedSafeAreaView>
  );
}

function Library() {
  const wallpaper = useLibraryWallpaper();

  return (
    <ThemedView
      style={{
        flex: 1,
      }}
    >
      <SplitView wallpaper={wallpaper} />
    </ThemedView>
  );
}

function Liked() {
  const wallpaper = useLikedWallpaper();

  return (
    <ThemedView
      style={{
        flex: 1,
      }}
    >
      <SplitView wallpaper={wallpaper} />
    </ThemedView>
  );
}

function Suggested() {
  const wallpaper = useSuggestedWallpaper();
  return (
    <ThemedView
      style={{
        flex: 1,
      }}
    >
      <SplitView wallpaper={wallpaper} />
    </ThemedView>
  );
}
