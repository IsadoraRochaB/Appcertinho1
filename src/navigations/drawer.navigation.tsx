import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ChatScreen, PerfilScreen, MapScreen, SairScreen, qrCode, CameraScreen, ArquivoScreen, AudioVideoScreen, AcelerometroScreen, PedometroScreen, MagnetoScreen, GyroscopioScreen } from "../screens";
import { Ionicons, MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";
import { Feather } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
    return (
        <Drawer.Navigator
            screenOption={{
                headerShown: true,
                headerStyle: { backgroundColor: colors.black },
                headerTintColor: colors.black,
                drawerStyle: {
                    backgroundColor: colors.black,
                },
                drawerInactiveTintColor: colors.black,
                drawerActiveTintColor: colors.black,
            }}
        >
            <Drawer.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    drawerLabel: "Perfil",
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.black} />
                    )
                }}
            />
            <Drawer.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    drawerLabel: "Chat",
                    drawerIcon: () => (
                        <Ionicons name="chatbubbles" size={24} color={colors.black} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Mapa"
                component={MapScreen}
                options={{
                    drawerLabel: "Mapa",
                    drawerIcon: () => (
                        <Ionicons name="map" size={24} color={colors.black} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Sair"
                component={SairScreen}
                options={{
                    drawerLabel: "Sair",
                    drawerIcon: () => (
                        <Ionicons name="exit" size={24} color={colors.black} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                    drawerLabel: "Camera",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="camera"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Arquivos"
                component={ArquivoScreen}
                options={{
                    drawerLabel: "Arquivos",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="file-account"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="QrCode"
                component={qrCode}
                options={{
                    drawerLabel: "Qrcode",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="ChatNavigation"
                component={ChatScreen}
                options={{
                    drawerLabel: "Chat",
                    title: "Chat",
                    drawerIcon: () => (
                        <Ionicons name="chatbubbles" size={24} color={colors.black} />
                    ),
                }}
            />

            <Drawer.Screen
                name="AudioVideo"
                component={AudioVideoScreen}
                options={{
                    drawerLabel: "Áudio Vídeo",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="video"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Acelerometro"
                component={AcelerometroScreen}
                options={{
                    drawerLabel: "Acelerômetro",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="car"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
             <Drawer.Screen
                name="Magneto"
                component={MagnetoScreen}
                options={{
                    drawerLabel: "Magneto",
                    drawerIcon: () => (
                        <FontAwesome
                            name="magnet"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Pedometro"
                component={PedometroScreen}
                options={{
                    drawerLabel: "Pedômetro",
                    drawerIcon: () => (
                        <Foundation
                            name="foot"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Gyroscopio"
                component={GyroscopioScreen}
                options={{
                    drawerLabel: "Gyroscópio",
                    drawerIcon: () => (
                        <FontAwesome
                            name="balance-scale"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

