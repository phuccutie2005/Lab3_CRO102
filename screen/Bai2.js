import React, { useCallback, useState, useRef } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";

const DATA = Array.from({ length: 255 }, (_, i) => ({
    id: i.toString(),
    title: `Item ${i + 1}`
}));

const AnimatedItem = ({ item, isVisible }) => {
    const opacity = useSharedValue(isVisible ? 1 : 0); //Điều chỉnh độ mờ
    const scale = useSharedValue(isVisible ? 1 : 0.8); //Điều chỉnh kích thước

    React.useEffect(() => {
        opacity.value = withTiming(isVisible ? 1 : 0, { duration: 500 }); //True: mờ dần phóng to, False: Ẩn dần thu nhỏ
        scale.value = withTiming(isVisible ? 1 : 0.8, { duration: 500 });
    }, [isVisible]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
    }));

    return (
        <Animated.View style={[styles.item, animatedStyle]}>
            <Text style={styles.text}>{item.title}</Text>
        </Animated.View>
    );
};

const Bai2 = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());

    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
        setVisibleItems(new Set(viewableItems.map((item) => item.item.id)));
    }, []);

    const renderItem = ({ item }) => {
        const isVisible = visibleItems.has(item.id);
        return <AnimatedItem item={item} isVisible={isVisible} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    item: {
        height: 80,
        marginVertical: 10,
        backgroundColor: "#90D7FF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    text: { fontSize: 18, fontWeight: "bold" },
});

export default Bai2;
