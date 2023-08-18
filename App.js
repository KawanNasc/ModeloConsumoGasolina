import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [km, setKm] = useState('');
  const [combustivel, setComb] = useState('');

  function calculoCombustivel() {

    const resultado = km / combustivel;
    alert("O consumo do seu carro é " + resultado );

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}> Consumo de combustível</Text>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={(km)=>setKm(km)} placeholder="Insira a distância percorrida" />
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={(combustivel)=>setComb(combustivel)} placeholder="Digite a quantia de combustível" />
      <TouchableOpacity style={styles.btn} onPress={calculoCombustivel}> 
        <Text style={styles.txtbtn}>Calcular o consumo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: { fontSize: 17, padding: 20, backgroundColor: "#330099", borderRadius: 10, margin: 15, marginTop: 10},
  btn: { alignItems: "center", backgroundColor: "#3333ff", padding: 15, borderRadius: 10, margin: 15, },
  txtbtn: { fontSize: 30, color: "#4dff4d"}
});
