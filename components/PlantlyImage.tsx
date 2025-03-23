import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage() {
  const { width } = useWindowDimensions();
  const imgSize = Math.min(width / 1.5, 400);

  return (
    <Image
      source={require("@/assets/plantly.png")}
      style={{ width: imgSize, height: imgSize }}
    />
  );
}
