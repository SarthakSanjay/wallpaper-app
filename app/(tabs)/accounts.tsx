import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Appearance,
} from "react-native";

export default function () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3D3D3D" }}>
      <Header />
      <ThemedView style={{ flex: 1 }}>
        <LoginButtons />
        <ThemeSelector />
        <About />
      </ThemedView>
    </SafeAreaView>
  );
}

function About() {
  return (
    <ThemedView style={styles.margin}>
      <ThemedText style={styles.bigText}>Settings</ThemedText>
      <ThemedView
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <ThemedText>Account</ThemedText>
        <ThemedText>Privacy Policy</ThemedText>
        <ThemedText>Terms of Service</ThemedText>
        <ThemedText>Lisenses</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

function ThemeSelector() {
  return (
    <ThemedView style={styles.margin}>
      <ThemedText style={styles.bigText}>Settings</ThemedText>
      <ThemedText style={{ marginVertical: 5 }}>Themes</ThemedText>
      <ThemedView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <ThemedButton title={"Dark"} selected={false} colorScheme="dark" />
        <ThemedButton title={"Light"} selected={false} colorScheme="light" />
        <ThemedButton title={"System"} selected={false} colorScheme={null} />
      </ThemedView>
    </ThemedView>
  );
}

function ThemedButton({
  title,
  selected,
  colorScheme,
}: {
  title: string;
  selected: boolean;
  colorScheme: "dark" | "light" | null;
}) {
  return (
    <Pressable
      style={{
        padding: 10,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        flex: 0.3,
      }}
      onPress={() => {
        Appearance.setColorScheme(colorScheme);
      }}
    >
      <ThemedText style={{ textAlign: "center" }}>{title}</ThemedText>
    </Pressable>
  );
}

function Header() {
  return (
    <ThemedView style={styles.margin}>
      <ThemedText style={styles.bigText}>Panels</ThemedText>
      <ThemedText>Sign In to save your data</ThemedText>
    </ThemedView>
  );
}

function LoginButtons() {
  const theme = useColorScheme() ?? "light";

  return (
    <>
      <AuthButtons
        label="Sign In"
        icon={
          <Ionicons
            name="logo-google"
            size={24}
            color={theme === "dark" ? Colors.light.icon : Colors.dark.icon}
          />
        }
      />
      <AuthButtons
        label="Sign In"
        icon={
          <Ionicons
            name="logo-apple"
            size={24}
            color={theme === "dark" ? Colors.light.icon : Colors.dark.icon}
          />
        }
      />
    </>
  );
}

function AuthButtons({ icon, label }: { icon: any; label: string }) {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      // style={styles.button}
      style={({ pressed }) => ({
        // backgroundColor: pressed ? "white" : "black",
        backgroundColor:
          theme === "dark" ? Colors.light.background : Colors.dark.background,
        ...styles.button, // Spread the button styles after the dynamic styles
      })}
    >
      {({ pressed }) => (
        <>
          {icon}

          <ThemedText
            style={{
              color: theme === "dark" ? Colors.light.text : Colors.dark.text,
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {label}
          </ThemedText>
        </>
      )}
      {/* <Text style={{ color: "white" }}>{label}</Text> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "50%",
    marginInline: "auto",
    marginTop: 10,
    borderRadius: 10,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  headerStyle: {
    padding: 10,
  },
  bigText: {
    fontSize: 25,
    fontWeight: 600,
  },
  margin: {
    padding: 20,
  },
});
