import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, ImageBackground, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; 

export default function Home() {
  
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');

 
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.scrollView} contentContainerStyle={style.contentContainer}>


        <View style={style.cardContainer}>
          <View style={style.cardContent}>
            <Image 
              source={{uri: 'https://oceanpanel.org/wp-content/uploads/2022/06/AdobeStock_240810340-scaled.jpeg'}} 
              style={style.cardImagem} 
           
            />
            

            <Text style={style.cardTitulo}>Recicle e Ganhe:</Text>
            <Text style={style.cardTxt}>
              Transforme Lixo em Pontos de Recompensas, Gere um Mundo Mais Azul!
            </Text>
            
            
         
          </View>
        </View>


        <View style={style.cardContainer}>
          <View style={style.cardContent}>
            <Image 
              source={{uri: 'https://img.freepik.com/fotos-premium/pessoa-usando-aplicativo-de-compartilhamento-de-carona-no-celular_746318-1552.jpg'}} 
              style={style.cardImagem} 
            
            
            />
            
            
            <Text style={style.cardTitulo}>Mapeamento de pontos e coleta:</Text>
            
            <Text style={style.cardTxt}>
              O mapeamento em nosso App através de  uma interface intuitiva e de fácil utilização, tem como principal função indicar os pontos de coleta disponíveis, facilitando a localização de locais próximos para o descarte correto de materiais recicláveis e consequentemente incentivando práticas sustentáveis na comunidade.
            </Text>
         
         
          </View>
        </View>
        
        <View style={style.cardContainer}>
          <View style={style.cardContent}>
            <Image 
              source={{uri: 'https://img.freepik.com/fotos-premium/grupo-de-voluntarios-a-recolher-lixo-na-praia-conceito-de-reciclagem_977232-1421.jpg'}} 
              style={style.cardImagem} 
            
            
            />
            
            
            <Text style={style.cardTitulo}>Coleta de resíduos por gamificação: </Text>
            <Text style={style.cardTxt}>
              Por meio de um sistema gamificado, os voluntários tiram fotos dos resíduos coletados, e o BluePoints utiliza a Inteligência Artificial (IA) para reconhecer e quantificar o material enviado. Com base nessa análise, o sistema atribui uma pontuação ao usuário, promovendo a conscientização ambiental e o engajamento na limpeza e preservação do meio ambiente.
            </Text>
          
          
          </View>
        </View>
        
        <View style={style.cardContainer}>
          <View style={style.cardContent}>
            <Image 
              source={{uri: 'https://img.freepik.com/fotos-gratis/mulher-ruiva-satisfeita-comemorando-a-vitoria-diga-sim-sim-e-puxe-o-punho-vencendo-no-celular-segure-o-smartphone-horizontalmente-em-pe-contra-um-fundo-branco_176420-46592.jpg?t=st=1717784825~exp=1717788425~hmac=c15d9bb6f29c51d1f8028a9592606405d75c9f174f5629a87f3901c60019ce39&w=1380'}} 
              style={style.cardImagem} 
            
            
            />
            
            
            <Text style={style.cardTitulo}>Sistema de Pontuação e Recompensa: </Text>
            <Text style={style.cardTxt}>
              As pontuações geradas ao usuário motiva a coleta de resíduos além de levar em consideração o resgate e o tempo decomposição dos materiais coletados. decomposição dos materiais coletados. Dessa forma, facilita a participação ativa na coleta desses materiais e promove a conscientização ambiental por meio de uma troca divertida e ao final, gratificante.
            </Text>
          
          
          </View>
        </View>
      </ScrollView>
    
    </SafeAreaView>
  );

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232424',
  },
  scrollView: {
    flex: 1,
  },
  
  
  contentContainer: {
    paddingBottom: 16, 
  },
  
  
  cardContainer: {
    marginBottom: 16, 
    borderRadius: 25,
    overflow: 'hidden',
    position: 'relative', 
    width: '100%', 
  },
  
  
  cardContent: {
    backgroundColor: '#10343C',
    borderRadius: 25,
    width: '100%',
    position: 'relative', 
  },
  
  
  cardImagem: {
    width: '100%',
    height: 200, 
    borderTopRightRadius: 25, 
    borderTopLeftRadiusRadius: 25, 
    position: 'relative',
    marginBottom: 16, 
  },
  
  
  cardTitulo: {
    fontFamily: 'WhyteRegular',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E9E9E9',
    marginBottom: 10, 
    padding: 5,
    paddingHorizontal: 16,
  },
 
 
  cardTxt: {
    fontFamily: 'inherit',
    fontSize: 16,
    color: '#E9E9E9',
    marginBottom: 16, 
    textAlign: 'justify',
    padding: 5,
    paddingHorizontal: 16,
  },
});