


import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Image, Dimensions, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';



import Header from './Header';

const { width: screenWidth } = Dimensions.get('window');


const saveUser = async (email, senha) => {
  try {
    await AsyncStorage.setItem(`user-${email}`, JSON.stringify({ email, senha }));
    console.log('Usuário salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar usuário:', error);
  }
};



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




export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);


  const usuarios = {
    'luiza@example.com': { senha: 'senha123', perfil: 'luiza' },
    'maria@example.com': { senha: 'senha456', perfil: 'maria' },
    'isabella@example.com': { senha: 'senha789', perfil: 'isabella' },
  };


  const handleLogin = async () => {
    
    const usuario = await getUser(email); 

    if (usuario && usuario.senha === senha) {
      navigation.navigate('Tab', { screen: 'Home', params: { perfil: usuario.perfil } }); 
      
    } else {
      alert('Email ou senha inválidos.');
    }
  };



  const handleGoogleLogin = () => {
    navigation.navigate('Tab', { screen: 'Home' });
  };



  const toggleShowPassword = () => {
    setShowSenha(!showSenha);
  };



  return (
    <View style={style.container}>
      <Header navigation={navigation} />

      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.contentContainerScroll}>
        <Text style={style.titulo}>Faça login no Blue Points</Text>

        <TouchableOpacity style={style.googleBotao} onPress={handleGoogleLogin}>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency/48/google-logo.png',
            }}
            style={style.googleIcon}
          />

          <Text style={style.googleBotaoTxt}>Continue com Google</Text>
        </TouchableOpacity>

        <Text style={style.txt}>ou</Text>

        <TextInput
          style={style.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />

        <View style={style.inputContainer}>
          <TextInput
            style={style.inputSenha}
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            secureTextEntry={!showSenha}
          />

          <TouchableOpacity
            onPress={toggleShowPassword}
            style={style.showSenha}>
            <Icon
              name={showSenha ? 'visibility-off' : 'visibility'}
              size={24}
              color="#b2b2b2"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.loginBotao} onPress={handleLogin}>
          <Text style={style.loginBotaoTxt}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RedefinirSenha')}>
          <Text style={style.linkTxt}>Redefinir senha</Text>
        </TouchableOpacity>

        <View style={style.cadastroContainer}>
          <Text style={style.cadastroTxt}>
            Nenhuma conta?
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Text style={style.cadastroLink}>Crie uma</Text>
            </TouchableOpacity>
          </Text>
        </View>
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

  googleBotao: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 6,
    marginBottom: 20,
    width: '80%',
    height: '11%',
  },

  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },

  googleBotaoTxt: {
    fontSize: 14,
    fontFamily: 'inherit',
    fontWeight: 'bold',
    color: '#2C2C2C',
  },

  txt: {
    fontFamily: 'inherit',
    fontSize: 14,
    color: '#b2b2b2',
    marginBottom: 25,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 15,
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

  loginBotao: {
    backgroundColor: '#1A3B48',
    padding: 15,
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 15,
    width: '80%',
  },

  loginBotaoTxt: {
    color: '#E9E9E9',
    fontSize: 14,
    textAlign: 'center',
    marginRight: '30%',
    marginLeft: '30%',
    fontFamily: 'Whyte',
    fontWeight: 'bold',
  },

  linkTxt: {
    color: '#647C8C',
    fontSize: 14,
    marginBottom: 10,
    textDecorationLine: 'underline',
    fontFamily: 'inherit',
  },

  cadastroContainer: {
    marginBottom: 10,
  },

  cadastroTxt: {
    fontFamily: 'inherit',
    fontSize: 14,
    color: '#7f7f7f',
  },

  cadastroLink: {
    fontFamily: 'inherit',
    color: '#647C8C',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginLeft: 5,
    marginBottom: -3,
  },
});




