import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
//import ButtonC from "../../components/Button";
import { LoginTypes } from "../../types/Screen.types";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ButtonComp, CardSocialComp } from "../../components";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useAuth } from "../../hook/auth";
import {TextInput,} from "react-native";


export default function Perfil ({navigation}: LoginTypes) {
  const {user} = useAuth();
  async function handleSignIn (){
    navigation.navigate("Login");
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }


  return (


    <View style={styles.container}>
      <View style={styles.image}> 
      <Image source={require("../../assets/Union.png")} />
      </View>


      <View style={styles.location}>
      <Ionicons name="person" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              keyboardType="email-address"
              secureTextEntry={true}
              autoCapitalize="none"
            />
      </View>


      <View style={styles.location}>
      <Entypo name="location"  style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Localização"
              keyboardType="email-address"
              secureTextEntry={true}
              autoCapitalize="none"
            />
      </View>

      <View style={styles.location}>
            <AntDesign name="phone"  style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              keyboardType="email-address"
              secureTextEntry={true}
              autoCapitalize="none"
            />
      </View>


      <View style={styles.location}>
      <MaterialCommunityIcons name="dog-side"  style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Dados"
              keyboardType="email-address"
              secureTextEntry={true}
              autoCapitalize="none"
            />
      </View>

      <View style={styles.input}>
        <ButtonComp title="Publicar" type="black" onPress={handleSignIn} />
        <ButtonComp title="Voltar" type="grey" onPress={handleLogin} />  
      </View>     
    </View>
  );
}


       
    
