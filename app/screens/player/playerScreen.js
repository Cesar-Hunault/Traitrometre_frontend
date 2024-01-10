import React from "react";
import { SafeAreaView, View, Text, StatusBar, ScrollView } from "react-native";
import { playerStyle } from "./playerScreenStyle";
import Stats from "../../../components/stats/stats";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import HistoriquePlayer from "../../../components/historiquePlayer/historiquePlayer";
import Icon from "react-native-vector-icons/Ionicons";

export const PlayerScreen = () => {
  const navigation = useNavigation();

  const back = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={playerStyle.screen}>
      <StatusBar animated={true} backgroundColor="#F5F5F5" barStyle="dark-content" />

      <View style={playerStyle.header}>
        <View style={playerStyle.iconContainer}>
          <Icon name="arrow-back" size={wp("8%")} color="rgba(135, 135, 135, 0.68)" onPress={() => back()} />
        </View>
      </View>

      <View style={playerStyle.picAndName}>
        <View style={playerStyle.profilPic}></View>
        <Text style={playerStyle.userName}> Nom </Text>
      </View>

      <View style={playerStyle.stats}>
        <Stats categorie="Nombre de Traitrise" points="27" />
        <Stats categorie="Total de points" points="158" />
        <Stats categorie="Position dans la course" points="1er" />
      </View>

      <ScrollView style={playerStyle.listContainer}>
        <HistoriquePlayer></HistoriquePlayer>
        <HistoriquePlayer></HistoriquePlayer>
        <HistoriquePlayer></HistoriquePlayer>
        <HistoriquePlayer></HistoriquePlayer>
        <HistoriquePlayer></HistoriquePlayer>
        <HistoriquePlayer></HistoriquePlayer>
        <HistoriquePlayer></HistoriquePlayer>
        <HistoriquePlayer></HistoriquePlayer>
        <HistoriquePlayer></HistoriquePlayer>
      </ScrollView>
    </SafeAreaView>
  );
};
