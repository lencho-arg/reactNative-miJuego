import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const NumberContainer = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default NumberContainer;