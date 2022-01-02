import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class Botao extends Component {
  
  constructor(props){
    super(props);
    this.state = {};

    let c = 1;
    if(props.c){
      c = parseInt(props.c);
    }

    this.styles = StyleSheet.create({
      area:{
        flex: c,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#999999',
        backgroundColor: '#E0E0E0'
      },
      text:{
        fontSize: 18
      }
    })
  } 
  render(){
    return(
      <TouchableOpacity style={this.styles.area}>
        <Text style={this.styles.text}></Text>
      </TouchableOpacity>
    );
  }
}

export default class calculadoraIphone extends Component {
  render(){
  return (
    <View style={styles.body}>
      <View style={styles.linha}>
        <Botao />
        <Botao />
        <Botao />
      </View>
      <View style={styles.linha}>
        <Botao />
        <Botao />
        <Botao />
      </View>
      <View style={styles.linha}>
        <Botao />
        <Botao />
        <Botao />
      </View>
      <View style={styles.linha}>
        <Botao />
        <Botao />
        <Botao />
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1
  },
  linha:{
    flex: 1,
    flexDirection: 'row'
  }
});
