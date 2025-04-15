import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View>
            <Text style={styles.text}>VIN</Text>
            <Text style={styles.text}>(Vehicle Identification Number)</Text>
        </View>
    );
}

const styles = StyleSheet.create({  
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    }
});