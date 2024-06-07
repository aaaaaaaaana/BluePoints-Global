



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, Share, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';





const EditarPerfil = ({ route }) => {
  const navigation = useNavigation();
  const [perfilImagemUri, setperfilImagemUri] = useState(null);
  const [backgroundImageUri, setBackgroundImageUri] = useState(null);
  const [nomePerfil, setNomePerfil] = useState('');
  const [usuario, setUsuario] = useState('');
  const [descricao, setDescricao] = useState('');



  const screenWidth = Dimensions.get('window').width;



  const pickImage = async (type) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });



    if (!result.cancelled) {

      if (type === 'perfil') {
        setperfilImagemUri(result.uri);
        await savePerfilData('perfilImagemUri', result.uri);


      } else if (type === 'background') {
        setBackgroundImageUri(result.uri);
        await savePerfilData('backgroundImageUri', result.uri);
      }
    }

  };



  const savePerfilData = async (key, value) => {

    try {
      await AsyncStorage.setItem(key, value);


    } catch (error) {
      console.error('Erro ao salvar dados do perfil:', error);
    }

  };





  const loadPerfilData = async () => {

    try {

      const perfilImagem = await AsyncStorage.getItem('perfilImagemUri');
      const backgroundImage = await AsyncStorage.getItem('backgroundImageUri');
      const nome = await AsyncStorage.getItem('nomePerfil');
      const user = await AsyncStorage.getItem('usuario');
      const desc = await AsyncStorage.getItem('descricao');

      if (perfilImagem) {
        setperfilImagemUri(perfilImagem);
      }


      if (backgroundImage) {
        setBackgroundImageUri(backgroundImage);
      }


      if (nome) {
        setNomePerfil(nome);
      }


      if (user) {
        setUsuario(user);
      }


      if (desc) {
        setDescricao(desc);
      }


    } catch (error) {
      console.error('Erro ao carregar dados do perfil:', error);
    }


  };





  useEffect(() => {
    loadPerfilData();
  }, []);



  const handleVoltar = () => {
    
    Alert.alert(
      'Cancelar Edição',
      'Deseja realmente cancelar a edição do perfil? As alterações não serão salvas.',
      [

        {
          text: 'Cancelar',
          style: 'cancel',
        },

        {
          text: 'Sim',
          onPress: () => navigation.navigate('Perfil'),
        },

      ],
      { cancelable: false }
    );

  };




  const handleSaveProfile = () => {
    
    navigation.navigate('Perfil', {
      perfilImagemUri,
      nomePerfil,
      usuario,
      descricao,
    });


  };







  return (


    <View style={style.container}>


      <TouchableOpacity onPress={() => pickImage('background')} style={style.header}>


        <ImageBackground
          source={backgroundImageUri ? { uri: backgroundImageUri } : {uri: 'https://i.pinimg.com/564x/a5/df/b2/a5dfb2f097f32bdf511393f18ac42a41.jpg'}}
          style={[style.header, { paddingTop: 100 }, { flex: 1 }]} 
          imageStyle={{ resizeMode: 'cover' }}
        >
         

          <View style={style.cameraContainerHeader}>

            <Image
              source={{ uri: 'https://img.icons8.com/stamp/96/FFFFFF/camera.png' }}
              style={style.cameraIcon}
            />

          </View>



          <TouchableOpacity onPress={handleVoltar} style={style.backIcon}>

            <Image
              source={{uri: 'https://img.icons8.com/ios-filled/100/FFFFFF/left.png'}} 
              style={style.icon}
            />

          </TouchableOpacity>




          <TouchableOpacity onPress={handleSaveProfile} style={style.saveIcon}>

            <Image
              source={{uri: 'https://img.icons8.com/ios-filled/100/FFFFFF/double-tick.png'}}
              style={style.icon}
            />

          </TouchableOpacity>




          <View style={style.headerContent}>


            <TouchableOpacity onPress={() => pickImage('perfil')} style={style.perfilImagemContainer}>

              <Image
                source={perfilImagemUri ? { uri: perfilImagemUri } : { uri: 'https://i.pinimg.com/736x/71/35/61/713561b26694d7aed804fd708007af16.jpg' }}
                style={style.perfilImagem}
              />
              

              <View style={style.cameraContainer}>

                <Image
                  source={{ uri: 'https://img.icons8.com/stamp/96/FFFFFF/camera.png' }}
                  style={style.cameraIcon}
                />

              </View>


            </TouchableOpacity>




            <View style={style.nomeUsuarioContainer}>

              <Text style={style.nomeUsuario}>Nome de perfil:</Text>


              <TextInput
                style={style.input}
                placeholder="Nome de perfil"
                placeholderTextColor="#71767B"
                value={nomePerfil}
                onChangeText={(text) => {
                  setNomePerfil(text);
                  savePerfilData('nomePerfil', text);
                }}
              />



              <View style={style.underline} /> 



            </View>



            <View style={style.usuarioContainer}>


              <Text style={style.nomeUsuario}>Usuário:</Text>


              <TextInput
                style={style.input}
                placeholder="@usuario"
                placeholderTextColor="#71767B"
                value={usuario}
                onChangeText={(text) => {
                  setUsuario(text);
                  savePerfilData('usuario', text);
                }}
              />


              <View style={style.underline} /> 



            </View>






            <View style={style.descricaoContainer}>
              <Text style={style.nomeUsuario}>Descrição:</Text>
              <TextInput
                style={style.input}
                placeholder="Descrição optativa para o usuário"
                placeholderTextColor="#71767B"
                multiline={true}
                numberOfLines={6}
                value={descricao}
                onChangeText={(text) => {
                  setDescricao(text);
                  savePerfilData('descricao', text);
                }}
              />

              <View style={style.underline} /> 


            </View>


            <View style={style.separador} />



          </View>



        </ImageBackground>



      </TouchableOpacity>



    </View>



  );



};






const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232424',
  },


  
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '53%',
  },



  headerContent: {
    alignItems: 'center',
    marginTop: '5%',
  },



  perfilImagemContainer: {
    width: 100,
    height: 100,
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
    top: -40,
    alignSelf: 'center', 
  },




  perfilImagem: {
    width: '100%',
    height: '100%',
  },



  cameraContainerHeader: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '53%',
    top: -10
  },



  cameraContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },



  cameraIcon: {
    width: 30,
    height: 30,
  },



  nomeUsuarioContainer: {
    alignItems: 'center',
    marginBottom: 10, 
    top: 80,
    position: 'absolute',
    width: '70%',
  },



  usuarioContainer: {
    alignItems: 'center',
    marginBottom: 10,
    top: 170, 
    position: 'absolute',
    width: '70%',
  },



  descricaoContainer: {
    alignItems: 'center',
    marginBottom: 10,
    top: 190, 
    width: '90%',
  },




  nomeUsuario: {
    fontSize: 16,
    fontFamily: 'inherit',
    fontWeight: 'bold',
    color: '#E9E9E9',
    marginBottom: 5,
  },



  input: {
    fontSize: 14,
    fontFamily: 'inherit',
    color: '#E9E9E9',
    padding: 2,
    textAlign: 'center',
    borderRadius: 5,
    width: '90%',
  },



  separador: {
    width: '100%',
    height: 1,
    backgroundColor: '#E9E9E9',
    marginTop: 10,
    position: 'absolute',
    top: 450,
  },



  icon: {
    width: 30,
    height: 30,
  },



  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },



  saveIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },



  underline: {
    borderBottomWidth: 1,
    borderBottomColor: '#71767B', 
    width: '90%',
    marginTop: 5,
    borderStyle: 'dashed',
  },



});





export default EditarPerfil;




