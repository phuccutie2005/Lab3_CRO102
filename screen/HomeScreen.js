import React from "react";
import { View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Bài 1 - Animation" onPress={() => navigation.navigate("Bai1")} />
            <Button title="Bài 2 - Gesture" onPress={() => navigation.navigate("Bai2")} />
            <Button title="Bài 3 - ListView" onPress={() => navigation.navigate("Bai3")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
});

export default HomeScreen;
