import React, {useEffect, useState} from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
//import ButtonC from "../../components/Button";
import { LoginTypes } from "../../types/Screen.types";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ButtonComp, CardSocialComp } from "../../components";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useAuth } from "../../hook/auth";
import {TextInput,} from "react-native";
import * as Notifications from 'expo-notifications';
import {registerForPushNotificationsAsync} from "../../services/data/Push";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
  shouldShowAlert: true,
  shouldPlaySound: false,
  shouldSetBadge: false,
}),
});

export default function Perfil() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user&& user.profile_photo_url) {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    async function fetchToken() {
      const token = await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  }, []);

  return (

    <View style={styles.container}>
      <View style={styles.image}> 
      <Image source={{ uri: user?.profile_photo_url }} style={styles.img} />
      <Text style={styles.link}>{user?.name}</Text>
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
      </View>     
    </View>
  );
}


       
    
