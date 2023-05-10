import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create ({
    container: {
        height: 80,
        backgroundColor: theme.colors.primary,
        marginTop: 35,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: theme.colors.white,
    }
})