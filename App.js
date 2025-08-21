import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View,  Keyboard, TouchableWithoutFeedback  } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CardResult from "./src/components/CardResult";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [marca, setMarca] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
       {/* Esto captura cualquier toque y cierra el teclado */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: Platform.OS === 'android' ? 30 : 0 }}> 
          <StatusBar style="light" />
          <View>
            <Header />
            <Search setSearch={setSearch} setMarca={setMarca} setYear={setYear} setVin={setVin} setShowResult={setShowResult} />
            {showResult && (
              <CardResult search={search} marca={marca} year={year} vin={vin}/>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
