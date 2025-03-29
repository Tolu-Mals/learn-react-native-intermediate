import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage({
  size,
  imageUri,
}: {
  size?: number;
  imageUri?: string;
}) {
  const { width } = useWindowDimensions();
  const imgSize = size || Math.min(width / 1.5, 400);

  return (
    <Image
      source={imageUri ? { uri: imageUri } : require("@/assets/plantly.png")}
      style={{ width: imgSize, height: imgSize, borderRadius: 6 }}
    />
  );
}
