


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; 
import Animated, { useAnimatedStyle, useSharedValue, useAnimatedScrollHandler, interpolate, Extrapolate } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export default function Header({ navigation }) {


  const [paginaTitulo, setPaginaTitulo] = useState('Home'); 
  const [voltarIcon, setVoltarIcon] = useState(false);


  const scrollY = useSharedValue(0);
  const insets = useSafeAreaInsets(); 

  const animatedStyle = useAnimatedStyle(() => {

    const borderRadius = interpolate(scrollY.value, [0, 100], [0, 25], Extrapolate.CLAMP);


    return {
      borderRadius: borderRadius,
    };
  });



  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;

  });



  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { 

      const routeName = navigation.getState().routes[navigation.getState().index].name;

      setPaginaTitulo(routeName === 'Home' ? 'Home' : routeName);
      setVoltarIcon(routeName === 'EditarPerfil' || routeName === 'NovaSenha' || routeName === 'Cadastro' || routeName === 'RedefinirSenha' || routeName === 'Camera' || routeName === 'Coletas');

    });
    


    return unsubscribe;
  }, [navigation]);



  return (


    <SafeAreaView style={styles.container}>


      <Animated.View style={[styles.contentContainer, animatedStyle]}>

        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.tituloContainer}>

          {paginaTitulo === 'Home' ? (

            <ImageBackground
              source={require('../../assets/fonte.png')} 
              style={styles.fonteLogo}
              resizeMode="contain"
            />

          ) : (
            <Text style={styles.txtTitulo}>{paginaTitulo}</Text>
          )}


        </View>




        {voltarIcon && (

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <View style={styles.iconContainer}> 


              <Image
                source={{uri: 'https://img.icons8.com/ios-filled/100/FFFFFF/left.png'}} 
                style={styles.icon}
                resizeMode="contain"
              />


            </View>

          </TouchableOpacity>

        )}


      </Animated.View>


    </SafeAreaView>

  );

}




const styles = StyleSheet.create({


  container: {
    backgroundColor: '#232424',
  },


  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: '10%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 100, 
  },



  tituloContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start', 
    
  },


  fonteLogo: {
    width: 100, 
    height: 30,
    marginBottom: -7, 
    marginStart: 5,
  },


  logoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },


  logo: {
    width: 40,
    height: 40,
  },


  txtTitulo: {
    color: '#E9E9E9', 
    fontSize: 20,
    fontFamily: 'WhyteRegular',
    marginLeft: 15,
  },


  iconContainer: {
    padding: 5, 
    paddingLeft: '70%'
    
  },


  icon: {
    width: 30, 
    height: 30, 
  },


});



