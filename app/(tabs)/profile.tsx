import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { StyleSheet, Button, View } from "react-native";

export default function Profile() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  return (
    <View style={styles.container}>
      <Button title="back to onboarding" onPress={toggleHasOnboarded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
