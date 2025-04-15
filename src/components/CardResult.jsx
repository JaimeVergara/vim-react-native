import { StyleSheet, Text, View } from "react-native";

export default function CardResult({search, marca, year}) {

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Tu VIN: {search.toUpperCase()}</Text>
            <Text style={styles.texto}>Marca: {marca}</Text>
            <Text style={styles.texto}>Año: {year}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "start",
        color: "black"
    }
});


