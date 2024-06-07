

import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, View, Platform, StatusBar, SafeAreaView, ScrollView, Animated, ImageBackground, Dimensions } from 'react-native';


import { useFonts } from 'expo-font';



import Header from './Header'
import Sobre from './Sobre'
import Login from './Login'


export default function Home({ navigation }){

  
  const [fontsLoaded] = useFonts({
    
    WhyteBold: require('../../assets/Whyte-Bold.ttf'),
    WhyteBoldItalic: require('../../assets/Whyte-BoldItalic.ttf'),
    WhyteMedium: require('../../assets/Whyte-Medium.ttf'),
    WhyteMediumItalic: require('../../assets/Whyte-MediumItalic.ttf'),
    WhyteRegular: require('../../assets/Whyte-Regular.ttf'),
    
  });



  if (!fontsLoaded) {
    return null; 
  }




  return (
    

    <SafeAreaView style={style.container}>

      <StatusBar backgroundColor="#232424" />

        <Header navigation={navigation}/>

      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.contentContainer}
      >

      <View>
        

        <Sobre/>


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
    alignItems: 'center',
  },



});






