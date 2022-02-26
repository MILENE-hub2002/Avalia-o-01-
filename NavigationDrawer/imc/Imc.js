import React, {Component} from 'react'
import {Text,TouchableOpacity, TextInput, View} from 'react-native'

import MeuEstilo from './src/meuestilo'

export default class App extends React.Component{
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
  

  imc=(valor1, valor2, resultado)=>{
    
     resultado=parseFloat(valor1 / (valor2 * valor2))

     if (resultado<=18){
      alert("IMC = " + resultado + " - ABAIXO DO PESO.") 
     } else   
     if (resultado>=30){
      alert("IMC = " + resultado + " - ACIMA DO PESO.") 
     } else   
    
       alert("IMC = " + resultado + " - PESO NORMAL.")
  }

  render(){
      return(
          <View style={MeuEstilo.container}>
              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="Digite seu Peso:"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaValor1}
              keyboardType='numeric' />

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="Digite sua Altura:"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaValor2}
              keyboardType='numeric' />

              <TouchableOpacity style={MeuEstilo.submitButton}
              onPress={
                  ()=>this.imc(this.state.valor1, this.state.valor2, this.state.resultado)
              }>
                  <Text style={MeuEstilo.submitButtonText}>Calcular IMC</Text>
              </TouchableOpacity>
          </View>
      )
  }
}
  