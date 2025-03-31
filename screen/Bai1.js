import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
} from "react-native-reanimated";

const Bai1 = () => {
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: offset.value }],
        };
    });

    const moveSquare = () => {
        const randomPosition = Math.floor(Math.random() * 300) - 50;
        runOnJS(() => {
            offset.value = withTiming(randomPosition, { duration: 500 });
        })();
    };

    return (
        <View style={styles.container}>
            <Button title="Move" onPress={moveSquare} />
            <Animated.View style={[styles.box, animatedStyles]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: "blue",
        borderRadius: 10, // Bo tròn chút nhìn đẹp hơn
        marginTop: 20, // Để tránh lỗi layout
    },
});

export default Bai1;
