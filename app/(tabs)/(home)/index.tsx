import { StyleSheet, FlatList } from "react-native";
import { theme } from "@/theme";
import { usePlantStore } from "@/store/plantStore";
import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);
  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => router.navigate("/new")}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 12,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
});
