import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./tab.navigation";
import { useAuth } from "../hook/auth";
import LoginNavigation from "./login.navigation";

export default function Navigation() {
  const { access_token } = useAuth();
  return (
    <NavigationContainer>
        {access_token ? <TabNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
}
