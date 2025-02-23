import useCarousel from "@/hooks/useCarousel";
import * as React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

export default function ImageCarousel() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const carouselImage = useCarousel();

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Carousel
        ref={ref}
        width={width}
        data={carouselImage}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <View style={styles.slideContainer}>
            <Image
              style={styles.image}
              source={{ uri: carouselImage[index] }}
            />
            <LinearGradient
              colors={["black", "rgba(0,0,0,0)"]}
              start={{ x: 0, y: 0.5 }} // Start from left middle
              end={{ x: 1, y: 0.5 }}
              style={styles.gradient}
            >
              <Text style={styles.text}>Flower</Text>
            </LinearGradient>
          </View>
        )}
      />
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={styles.dot}
        containerStyle={styles.paginationContainer}
        onPress={onPressPagination}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderColor: "green",
    // borderWidth: 1,
  },
  slideContainer: {
    flex: 1,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "20%",
    width: "40%",
    // borderWidth: 1,
    borderColor: "white",
    paddingInline: 5,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 50,
  },
  paginationContainer: {
    gap: 5,
    marginTop: 10,
    position: "absolute",
    bottom: 5,
  },
});
