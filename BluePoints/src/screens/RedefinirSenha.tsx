


import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Header from './Header'

const { width: screenWidth } = Dimensions.get('window'); 



export default function RedefinirSenha() {

  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');


  const getUser = async (email) => {
    try {
      const userString = await AsyncStorage.getItem(`user-${email}`);
      if (userString) {
        return JSON.parse(userString);
      } else {
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return null;
    }

  };


  const handleRedefinirSenha = async () => {
    const usuario = await getUser(email);
    if (usuario) {
      navigation.navigate('NovaSenha', { email }); 
    } else {
      alert('Email não encontrado.');
    }
  };



  return (


    <View style={style.container}>

      <Header navigation={navigation}/>

      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.contentContainerScroll}
      >

        <Text style={style.titulo}>Digite seu e-mail para redefinir a senha</Text>



        <TextInput
          style={style.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />


        <TouchableOpacity style={style.redefinirSenhaBotao} onPress={handleRedefinirSenha}>

          <Text style={style.redefinirSenhaBotaoTxt}>Redefinir senha</Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >

          <Text style={style.cancelaLink}>Cancelar</Text>
        
        </TouchableOpacity>

      </ScrollView>


    </View>


  );
}




const style = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#232424',
  },


  scrollView: {
    flex: 1,
    width: '100%',
  },


  contentContainerScroll: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%', 
  },



  titulo: {
    fontFamily: 'WhyteRegular',
    color: '#E9E9E9',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: '10%',
    marginLeft: '10%',
    marginBottom: 30,
    textAlign: 'center',
  },




  input: {
    fontFamily: 'inherit',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ffff',
    color: '#2C2C2C',
    backgroundColor: '#ffff',
    maxWidth: '80%',
    maxHeight: '20%',
    flex: 1,
  },



  redefinirSenhaBotao: {
    backgroundColor: '#1A3B48',
    padding: 15,
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 15,
    width: '80%',

  },



  redefinirSenhaBotaoTxt: {
    color: '#E9E9E9',
    fontSize: 14,
    textAlign: 'center',
    marginRight: '30%',
    marginLeft: '30%',
    fontFamily: 'Whyte',
    fontWeight: 'bold',
  },





  cancelaLink: {
    fontFamily: 'inherit',
    color: '#647C8C',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginLeft: 5,
    marginBottom: -3,
  },
  

});




