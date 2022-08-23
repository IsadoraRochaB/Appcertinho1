import React from "react";
import { Text, View, Image } from "react-native";
import {IMensagemState} from "../../interfaces/Mensagem.interface";
//import { CardProps } from "../../interfaces/Card.interface";
import styles from "./styles";
import {format} from "date-fns";

export default function Card({ data }: IMensagemState) {
  return (
    <View style={styles.cardOrange}>
      <Text>
        {data.user.name} -{" "}
        {format (new Date(data.created_at), "dd/MM/yyyy HH:mm:ss")}
      </Text>
      <View>
        <Text>Cidade: {data.cidade}</Text>
        <Text>Localização: {data.localização}</Text>
        <Text>Descrição: {data.mensagem}</Text>
        <Image source={{uri: data.imagem}} style={styles.img} />
        <View style={styles.topicos}>
          {data.topico.map((i) => (
            <View key={i.id} style={styles.topic}>
              <Text>{i.topico}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
