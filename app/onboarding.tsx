import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function Onboarding() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  };
  return (
    <View style={styles.container}>
      <PlantlyButton title="Let me in" onPress={handlePress} />
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
