


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, Share, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Perfil = () => {
  const navigation = useNavigation();
  const [perfilImagemUri, setperfilImagemUri] = useState(null);
  const [backgroundImageUri, setBackgroundImageUri] = useState(null);
  const [nomePerfil, setNomePerfil] = useState('');
  const [usuario, setUsuario] = useState('');
  const [descricao, setDescricao] = useState('');


  const handleShare = async () => {

    try {

      const result = await Share.share({
        message: 'Meu perfil: [LINK DO SEU PERFIL]',
        title: 'Compartilhar Perfil',

      });


      if (result.action === Share.sharedAction) {
        console.log('Compartilhado com sucesso!');


      } else if (result.action === Share.dismissedAction) {
        console.log('Compartilhamento cancelado');

      }



    } catch (error) {
      console.error(error.message);
    }


  };




  const handleEditProfile = () => {
    navigation.navigate('EditarPerfil', {
      perfilImagemUri,
      nomePerfil,
      usuario,
      descricao,
    });
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






  return (

    
    <View style={style.container}>


      <ImageBackground
        source={backgroundImageUri ? { uri: backgroundImageUri } : {uri: 'https://i.pinimg.com/564x/a5/df/b2/a5dfb2f097f32bdf511393f18ac42a41.jpg'}}
        style={style.header}
        imageStyle={{ resizeMode: 'cover' }}
      >



        <View style={style.headerIcons}>


          <TouchableOpacity style={style.headerIcon} onPress={() => navigation.navigate('handleEditProfile')}>

            <Image 
              source={{ uri: 'https://img.icons8.com/ios-glyphs/96/ECEDEE/paint-palette--v1.png' }} 
              style={style.icon} 
            />

          </TouchableOpacity>


          <TouchableOpacity style={style.headerIcon} onPress={handleShare}>

            <Image 
              source={{ uri: 'https://img.icons8.com/ios-glyphs/96/ECEDEE/share--v1.png' }} 
              style={style.icon} 
            />

          </TouchableOpacity>


        </View>

          

        <View style={style.headerContent}>


          <View style={style.perfilImagemContainer}>

            <Image 
              source={perfilImagemUri ? { uri: perfilImagemUri } : { uri: 'https://i.pinimg.com/736x/71/35/61/713561b26694d7aed804fd708007af16.jpg' }} 
              style={style.perfilImagem} 
            />


          </View>

          <View style={style.nomeUsuarioContainer}> 

            <Text style={style.nomeUsuario}>{nomePerfil}</Text>

            <Text style={style.usuario}>@{usuario}</Text>


          </View>

          <View style={style.descricaoContainer}> 

            <Text style={style.descricao} numberOfLines={6} ellipsizeMode="tail">
              {descricao}
            </Text>

            
          </View>




          <View style={style.separador} />


        </View>

          <Text style={style.recompensa}>Recompensas resgatadas</Text>



      </ImageBackground>




       <View style={style.content}>


          <View style={style.cardLinha}>
            


            <View style={style.card}>


              <View style={style.cardContent}>


                <Image 
                  source={{ uri: 'https://brindesriodejaneiro.com.br/wp-content/uploads/2021/08/Copo-Retratil-de-Silicone-150ml-Preto.webp' }} 
                  style={style.cardImagem}
                />
                
                  <Text style={style.cardTxt}>Copo dobravel</Text>
                
              </View>


            </View>



           
            <View style={style.card}>


              <View style={style.cardContent}>


                <Image 
                  source={{ uri: 'https://bioretro.eco.br/wp-content/uploads/2013/08/talheres-comida-designer-bioretro.jpg' }}
                  style={style.cardImagem}
                />
                
                  <Text style={style.cardTxt}>Talher biodegradavel</Text>
                
              </View>

            </View>


          </View>



          <View style={style.cardLinha}>
            

            <View style={style.card}>


              <View style={style.cardContent}>


                <Image 
                  source={{ uri: 'https://www.sindustrigo.com.br/assets/upload/noticias/8509513081554214142biotrem-5.jpg' }}
                  style={style.cardImagem}
                />
                
                  <Text style={style.cardTxt}>Prato biodegradavel</Text>
                
              </View>


            </View>



            
            <View style={style.card}>

              <View style={style.cardContent}>


                <Image 
                  source={{ uri: 'https://img.icons8.com/carbon-copy/100/FFFFFF/loyalty-card.png' }}
                  style={style.cardImagem}
                />

                  <Text style={style.cardTxt}>Cupom</Text>

              </View>
            </View>

            
          </View>


        <View style={style.linha}>

          <View style={style.item} />


          <View style={style.item} />


        </View>


      </View>


    </View>


  );
};







const style = StyleSheet.create({



  container: {
    flex: 1,
    backgroundColor: '#232424',
  },



  header: {
    height: '53%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
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
    position: 'absolute',
  },


  perfilImagem: {
    width: '100%',
    height: '100%',
  },


  nomeUsuarioContainer: {
    alignItems: 'center',
    marginBottom: 10, 
    top: 90,
    position: 'absolute',
  },


  nomeUsuario: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'inherit',
    color: '#ECEDEE',
    marginTop: 10,
    marginBottom: 20,
    top: '20%',
  },


  usuario: {
    fontSize: 14,
    color: '#71767B',
    fontFamily: 'inherit',
    marginBottom: 5,
  },


  descricaoContainer: {
    alignItems: 'center',
    marginBottom: 10, 
    top: 160,
    width: '90%',   
  },


  descricao: {
    fontFamily: 'inherit',
    fontSize: 14,
    color: '#E9E9E9',
    padding: 20,
    textAlign: 'justify',
  },


  separador: {
    width: '100%',
    height: 1,
    backgroundColor: '#71767B', 
    marginTop: 10,
    position: 'absolute', 
    top: 250, 
  },


  recompensa: {
    fontFamily: 'inherit',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E9E9E9',
    marginTop: 10,
    top: 220,
  },



  content: {
    padding: 20,
    flex: 1,
  },



  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    top: 130,
  },



  item: {
    width: '48%',
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 10,
  },



  headerIcons: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
  },


  
  headerIcon: {
    padding: 10,
    margin: 5,
  },



  icon: {
    width: 30,
    height: 30,
  },


  card: {
    backgroundColor: '#2C4454',
    borderRadius: 10,
    marginBottom: 20,
    padding: '1%',
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%', 
    marginRight: 10, 
    top: 100,
    left: '-2%'
  },


  cardContent: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 5,
  },


  cardImagem: {
    width: 60, 
    height: 60, 
    borderRadius: 10,
    marginRight: 10, 
  },




  cardTxt: {
    fontFamily: 'inherit',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E9E9E9',
    marginBottom: 5,
    flexWrap: 'wrap',
    maxWidth: '50%'
  },


  cardLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },



});



export default Perfil;



