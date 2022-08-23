import { StackNavigationProp } from "@react-navigation/stack";

// Login Stack
export type LoginStackParamList = {
  Login: undefined;
  Cadastrar: undefined;
  Tab: undefined;
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

// Chat Stake 
export type ChatStackParamLIst ={
  Chat: undefined
  EnviarMensagem: undefined
}
type ChatScreenNavigationProp = StackNavigationProp<ChatStackParamLIst, 'Chat'>
export type ChatTypes ={
  navigation: ChatScreenNavigationProp
}