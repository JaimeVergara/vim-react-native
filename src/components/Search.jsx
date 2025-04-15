import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";
import { VinMarca } from "../api/VinMarca";
import { VinAño } from "../api/VinAño";

export default function Search({setSearch, setMarca, setYear}) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    Alert.alert("Buscando:", searchText);
    setSearch(searchText);
    setMarca(VinMarca(searchText));
    setYear(VinAño(searchText));
  };

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Ingresar VIN ..."
            placeholderTextColor="#aaa"
            value={searchText}
            onChangeText={setSearchText}
        />
        <View style={styles.containerButtons}>
          <TouchableOpacity onPress={handleSearch} style={styles.button}> 
              <Text>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSearch} style={styles.button}> 
              <Text>Cancelar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "white",
    marginBottom: 15, // Espacio entre input y botones
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginRight: 10, // Espacio entre botones
  },
  containerButtons: {
    flexDirection: "row", // Alinea los botones horizontalmente
    justifyContent: "flex-end", // Espacio entre ellos
  },
});
