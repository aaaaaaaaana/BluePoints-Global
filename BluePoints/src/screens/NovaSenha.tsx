


import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 





import Header from './Header'

const { width: screenWidth } = Dimensions.get('window'); 



const saveUser = async (email, senha) => {
  try {
    await AsyncStorage.setItem(`user-${email}`, JSON.stringify({ email, senha }));
    console.log('Usuário salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar usuário:', error);
  }
};


export default function NovaSenha() {

  const navigation = useNavigation();
  const route = useRoute();
  
  const [senha, setSenha] = useState('');
  const [novaSenha, setnovaSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false)
  const email = route.params?.email;

  const handleNovaSenha = async () => {
    if (senha !== novaSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    if (email) {
      await saveUser(email, novaSenha); 
      alert('Senha alterada com sucesso!');
      navigation.navigate('Login'); 
    } else {
      alert('Erro ao atualizar a senha. Tente novamente.');
    }
  };


  const toggleShowPassword = () => {
    setShowSenha(!showSenha);
  };





  return (


    <View style={style.container}>

      <Header navigation={navigation}/>

      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.contentContainerScroll}
      >

        <Text style={style.titulo}>Digite sua nova senha</Text>


        <View style={style.inputContainer}> 

          <TextInput
            style={style.inputSenha}
            placeholder="Nova senha"
            onChangeText={setSenha}
            value={senha}
            secureTextEntry={!showSenha}
          />

          <TouchableOpacity onPress={toggleShowPassword} style={style.showSenha}>

            <Icon 
              name={showSenha ? 'visibility-off' : 'visibility'} 
              size={24} 
              color="#b2b2b2" 
            />

          </TouchableOpacity>

        </View>


        <View style={style.inputContainer}> 

          <TextInput
            style={style.inputSenha}
            placeholder="Confirme nova senha"
            onChangeText={setnovaSenha}
            value={novaSenha}
            secureTextEntry={!showSenha}
          />

          <TouchableOpacity onPress={toggleShowPassword} style={style.showSenha}>

            <Icon 
              name={showSenha ? 'visibility-off' : 'visibility'} 
              size={24} 
              color="#b2b2b2" 
            />

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={style.novaSenhaBotao} onPress={handleNovaSenha}>

          <Text style={style.novaSenhaBotaoTxt}>Confirmar senha</Text>

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
    marginBottom: 30,
  },




  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    width: '80%', 
    marginBottom: 15, 
  },




  inputSenha: {
    fontFamily: 'inherit',
    padding: 10,
    width: '80%', 
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ffff',
    color: '#2C2C2C',
    backgroundColor: '#ffff',
    flex: 1,
  },



  showSenha: {
    position: 'absolute', 
    right: 0, 
    padding: 10, 
    top: '5%',
  },



  novaSenhaBotao: {
    backgroundColor: '#1A3B48',
    padding: 15,
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 15,
    width: '80%',

  },



  novaSenhaBotaoTxt: {
    color: '#E9E9E9',
    fontSize: 14,
    textAlign: 'center',
    marginRight: '30%',
    marginLeft: '30%',
    fontFamily: 'Whyte',
    fontWeight: 'bold',
  },


});




