import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ThemedView } from "@/components/ThemedView";
import { SplitView } from "@/components/SplitView";
import {
  useLibraryWallpaper,
  useLikedWallpaper,
  useSuggestedWallpaper,
} from "@/hooks/useWallpapers";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
  const theme = useColorScheme() ?? "light";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,
        tabBarStyle: {
          backgroundColor: Colors[theme].background,
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
        },
      }}
    >
      <Tab.Screen name="Library" component={Library}></Tab.Screen>
      <Tab.Screen name="Liked" component={Liked}></Tab.Screen>
      <Tab.Screen name="Suggested" component={Suggested}></Tab.Screen>
    </Tab.Navigator>
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
