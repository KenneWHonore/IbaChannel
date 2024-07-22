import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import { useNavigation } from '@react-navigation/native';
import slide from "../slide";
import OnboardingItem from "./OnboardingItem"
import Paginator from "./paginator";
import NextButton from "./NetButton";



export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const navigation = useNavigation();

  const viewableIndexChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {

    if (currentIndex < slide.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });

    } else {
      //console.log('last item.');
      navigation.navigate('Setting');

    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList data={slide}
          renderItem={({ item, index }) => <OnboardingItem index={index} currentIndex={currentIndex} item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableIndexChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slide} scrollx={scrollx} />
      <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slide.length)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
