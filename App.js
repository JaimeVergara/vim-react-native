import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CardResult from "./src/components/CardResult";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [marca, setMarca] = useState("");
  const [year, setYear] = useState("");

  return (
    <SafeAreaView style={styles.container}>
     <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: Platform.OS === 'android' ? 30 : 0 }}> 
      <StatusBar style="light" />
      <View>
        <Header />
        <Search setSearch={setSearch} setMarca={setMarca} setYear={setYear} />
        <CardResult search={search} marca={marca} year={year}/>
      </View>
    </View>
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
