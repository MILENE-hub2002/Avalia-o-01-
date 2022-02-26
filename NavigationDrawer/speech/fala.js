import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from 'react-native';
import * as Speech from 'expo-speech';


export default class App extends React.Component {
  state={
    valor1:0.0,
    valor2:0.0,
    resultado:0.0
  }

  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }

  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  }

  speakSomar(){
    this.state.resultado=parseFloat(this.state.valor1)+
    parseFloat(this.state.valor2);
    var fala = "A soma dos números" + this.state.valor1 + "e" + this.state.valor2 + "é" + 
    this.state.resultado + ".";

	Speech.speak(fala);

  }

  speakSubtrair(){
    this.state.resultado=parseFloat(this.state.valor1)-
    parseFloat(this.state.valor2);
    var fala = "A subtração dos números" + this.state.valor1 + "e" + this.state.valor2 + "é" + 
    this.state.resultado + ".";

	Speech.speak(fala);
  }

  speakMultiplicar(){
    this.state.resultado=parseFloat(this.state.valor1)*
    parseFloat(this.state.valor2);
    var fala = "A multiplicação dos números" + this.state.valor1 + "e" + this.state.valor2 + "é" + 
    this.state.resultado + ".";

	Speech.speak(fala);
  }

  speakDividir(){
    this.state.resultado=parseFloat(this.state.valor1)/
    parseFloat(this.state.valor2);
    var fala = "A divisão dos números" + this.state.valor1 + "e" + this.state.valor2 + "é" + 
    this.state.resultado + ".";

	Speech.speak(fala);
  }

  render(){
    return(
      <View style={styles.container}>
        <h1>CALCULADORA FALANTE</h1>
        <StatusBar backgroundColor="black"/>
        <TextInput underlineColorAndroid="transparent"
        placeholder="Digite o Valor 1"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={this.atualizaValor1}
        keyboardType='numeric' />

        <br></br>

       <TextInput underlineColorAndroid="transparent"
        placeholder="Digite o Valor 2"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={this.atualizaValor2}
        keyboardType='numeric' />

	
	<TouchableOpacity onPress={()=>this.speakSomar(this.state.valor1, this.state.valor2, this.state.resultado)}
        >
        <br></br>
          <Text>SOMAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.speakSubtrair(this.state.valor1, this.state.valor2, this.state.resultado)}
        >
        <br></br>
          <Text>SUBTRAIR</Text>
          <br></br>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.speakMultiplicar(this.state.valor1, this.state.valor2, this.state.resultado)}
        >
          <Text>MULTIPLICAR</Text>
          <br></br>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.speakDividir(this.state.valor1, this.state.valor2, this.state.resultado)}
        >
          <Text>DIVIDIR</Text>
        </TouchableOpacity>

      </View>


    )
  }
}

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F08080',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });