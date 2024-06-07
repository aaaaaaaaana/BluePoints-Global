



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, Share, Dimensions, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


import Header from './Header'



const Recompensa = () => {
  const navigation = useNavigation();

 
  const [pontos, setPontos] = useState(15000); 
  const [pontosResgatados, setPontosResgatados] = useState(0); 

  useEffect(() => {
    
    loadPontosResgatados();
  }, []);

  


  useEffect(() => {
    savePontosResgatados();
  }, [pontos]);

  const handleEditProfile = () => {
    navigation.navigate('EditarPerfil');
  };



  const screenWidth = Dimensions.get('window').width;



  const handleRedeemReward = (rewardPoints) => {
    if (pontos >= rewardPoints) {
      setPontos(pontos - rewardPoints);
      setPontosResgatados(pontosResgatados + rewardPoints);
      alert(`Recompensa resgatada! Pontos restantes: ${pontos - rewardPoints}`); 
    } else {
      alert('Pontos insuficientes!');
    }
  };

  
  const savePontosResgatados = async () => {
    try {
      await AsyncStorage.setItem('pontosResgatados', JSON.stringify(pontosResgatados));
    } catch (error) {
      console.error('Erro ao salvar pontos resgatados:', error);
    }
  };

 
  const loadPontosResgatados = async () => {
    try {
      const storedPontosResgatados = await AsyncStorage.getItem('pontosResgatados');
      if (storedPontosResgatados !== null) {
        setPontosResgatados(JSON.parse(storedPontosResgatados));
      }
    } catch (error) {
      console.error('Erro ao carregar pontos resgatados:', error);
    }
  };

  return (
    <View style={style.container}>
      
      <Header navigation={navigation}/>
      

      <View style={style.pontosContainer}>
       
        <Text style={style.pontosTexto}>Pontos</Text>
        <Text style={style.pontosNumero}>{pontos}</Text>
      
      </View>
      



      <View style={style.separador} />


      <ScrollView style={style.content} contentContainerStyle={style.rolagemcontent}> 
        
        <View style={style.cardLinha}>
          
          
          <View style={style.card}>
            
            <View style={style.cardContent}>
             
             
             <Image
                source={{ uri: 'https://brindesriodejaneiro.com.br/wp-content/uploads/2021/08/Copo-Retratil-de-Silicone-150ml-Preto.webp' }}
                style={style.cardImagem}
              
              
              />
              <View style={style.cardTxtContainer}>
               
                <Text style={style.cardTxt}>Copo dobravel</Text>
                
                <Text style={style.cardPontos}>1000 pontos</Text>
              
              </View>
              
              
              <TouchableOpacity 
                style={style.resgatarbotao}
                onPress={() => handleRedeemReward(1000)}
              >
              
                <Text style={style.resgatarbotaoText}>Resgatar</Text>
              
              </TouchableOpacity>
            
            </View>
          
          </View>

         
          <View style={style.card}>
           
            <View style={style.cardContent}>
             
             
              <Image
                source={{ uri: 'https://bioretro.eco.br/wp-content/uploads/2013/08/talheres-comida-designer-bioretro.jpg' }}
                style={style.cardImagem}
              />
              
              
              <View style={style.cardTxtContainer}>
                <Text style={style.cardTxt}>Talher biodegradavel</Text>
                
                <Text style={style.cardPontos}>5000 pontos</Text>
             
             
              </View>
             
              <TouchableOpacity 
                style={style.resgatarbotao}
                onPress={() => handleRedeemReward(5000)}
              >
                <Text style={style.resgatarbotaoText}>Resgatar</Text>
              
              
              </TouchableOpacity>
            
            
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
              
              <View style={style.cardTxtContainer}>
               
                <Text style={style.cardTxt}>Prato biodegradavel</Text>
               
                <Text style={style.cardPontos}>7500 pontos</Text>
             
             
              </View>
             
              <TouchableOpacity 
                style={style.resgatarbotao}
                onPress={() => handleRedeemReward(7500)}
              >
               
                <Text style={style.resgatarbotaoText}>Resgatar</Text>
             
              </TouchableOpacity>
            
            </View>
          
          </View>

          
          
          <View style={style.card}>
            
            <View style={style.cardContent}>
             
              <Image
                source={{ uri: 'https://img.icons8.com/carbon-copy/100/FFFFFF/loyalty-card.png' }}
                style={style.cardImagem}
              />
             
              <View style={style.cardTxtContainer}>
                
                <Text style={style.cardTxt}>Cupom</Text>
               
               
                <Text style={style.cardPontos}>2000 pontos</Text>
              
              
              </View>
              
              
              <TouchableOpacity 
                style={style.resgatarbotao}
                onPress={() => handleRedeemReward(2000)}
              >
                
                <Text style={style.resgatarbotaoText}>Resgatar</Text>
              
              </TouchableOpacity>
            
            </View>
          
          </View>
        
        </View>

        
        <View style={style.cardLinha}>
          
          
          <View style={style.card}>
            
            <View style={style.cardContent}>
             
             
              <Image
                source={{ uri: 'https://www.freeshop.com.br/brindes/fotos/produtos/Originais/1550/canudo-e-saquinho-novo-3.jpg' }}
                style={style.cardImagem}
              />
             
              <View style={style.cardTxtContainer}>
               
               
                <Text style={style.cardTxt}>Copo dobravel</Text>
               
                <Text style={style.cardPontos}>5000 pontos</Text>
              
              </View>
              
              
              <TouchableOpacity 
                style={style.resgatarbotao}
                onPress={() => handleRedeemReward(5000)}
              >
                <Text style={style.resgatarbotaoText}>Resgatar</Text>
              
              </TouchableOpacity>
            
           
            </View>
          
          </View>

       
          
          <View style={style.card}>
            
            <View style={style.cardContent}>
             
             
              <Image
                source={{ uri: 'https://cdn.sistemawbuy.com.br/arquivos/c4c1b7793893cdf3a231f07e9858ad25/produtos/MEI5GOU7/f5c1af72ef31c3bc9ac78468b8980ea3-60e60e8557ede.jpg' }}
                style={style.cardImagem}
              />
             
              <View style={style.cardTxtContainer}>
               
                <Text style={style.cardTxt}>Talher biodegradavel</Text>
               
                <Text style={style.cardPontos}>5000 pontos</Text>
              
              </View>
              
              <TouchableOpacity 
                style={style.resgatarbotao}
                onPress={() => handleRedeemReward(5000)}
              >
               
                <Text style={style.resgatarbotaoText}>Resgatar</Text>
              
              </TouchableOpacity>
            
            </View>
          
          </View>
        
        </View>

        
        
        <View style={style.cardLinha}>

         
         


          <View style={style.card}>
           
            <View style={style.cardContent}>
              
              
              <Image
                source={require('../../assets/ecobag.png')}
                style={style.cardImagem}
              />
              
              <View style={style.cardTxtContainer}>
              
                <Text style={style.cardTxt}>Prato biodegradavel</Text>
                <Text style={style.cardPontos}>7500 pontos</Text>
              
              </View>
              


              <TouchableOpacity 
                style={style.resgatarbotao}
                onPress={() => handleRedeemReward(7500)}
              >
                
                <Text style={style.resgatarbotaoText}>Resgatar</Text>
              
              </TouchableOpacity>
            
            </View>
          

          </View>

  


          
          <View style={style.card}>
            
            <View style={style.cardContent}>
             
             
              <Image
                source={{ uri: 'https://img.icons8.com/carbon-copy/100/FFFFFF/loyalty-card.png' }}
                style={style.cardImagem}
              />
             
              <View style={style.cardTxtContainer}>
                
                <Text style={style.cardTxt}>Cupom</Text>
                <Text style={style.cardPontos}>2000 pontos</Text>
              
              
              </View>




              <TouchableOpacity 
                style={style.resgatarbotao}
                onPress={() => handleRedeemReward(2000)}
              >
               
                <Text style={style.resgatarbotaoText}>Resgatar</Text>
              
              </TouchableOpacity>
            


            </View>
          
          </View>
        
        </View>

        


      </ScrollView>



    </View>



  );


};




const style = StyleSheet.create({



  container: {
    flex: 1,
    backgroundColor: '#232424',
  },



  separador: {
    width: '100%',
    height: 2,
    backgroundColor: '#71767B',
    marginTop: 10,
    marginBottom: 20, 
  },



  pontosContainer: {
    alignItems: 'flex-start',
    marginTop: 20, 
    padding: 10,
  },



  pontosTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ECEDEE',
    marginBottom: 5,
  },



  pontosNumero: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ECEDEE',
  },



  content: {
    padding: 10,
    flex: 1,
  },



  rolagemcontent: {
    paddingBottom: 20, 
  },



  card: {
    backgroundColor: '#2C4454',
    borderRadius: 10,
    marginBottom: 2,
    padding: '1%',
    flexDirection: 'column',
    alignItems: 'center', 
    width: '48%',
  },


  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    width: '100%', 
  },



  cardImagem: {
    width: '100%', 
    height: 120, 
    borderRadius: 10,
    marginBottom: 10,
  },



  cardTxtContainer: { 
    alignItems: 'center',
  },


  cardTxt: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
    textAlign: 'center', 
  },


  cardPontos: {
    fontSize: 12, 
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },



  cardLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
  },



  resgatarbotao: {
    backgroundColor: '#647C8C', 
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },

  
  resgatarbotaoText: {
    color: '#fff',
    fontWeight: 'bold',
  },


});

export default Recompensa;



