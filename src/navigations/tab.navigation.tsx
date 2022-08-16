import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, PerfilScreen, MapScreen, SairScreen, qrCode, CameraScreen, ArquivoScreen } from "../screens";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.blue,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.blue,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Sair"
        component={SairScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="exit" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
      name="QrCode"
      component={qrCode}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name= "qrcode-scan" size={24} color={colors.white} />
        ),
      }}
    />
    <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="camera" 
            size={24} color={colors.white} />
          ),
        }}
    />
    <Tab.Screen
      name="Arquivos"
      component={ArquivoScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
          name="file-account"
          size={24}
          color={colors.white}
          />
        ),
      }}
    />
    </Tab.Navigator>
  );
}
