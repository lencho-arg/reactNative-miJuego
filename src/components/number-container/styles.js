import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
    container:{
        width: 'auto',
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.secundary,
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 10,
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.white,
    },
})