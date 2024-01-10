import React from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native";
import { profilStyle } from "./profilScreenStyle";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Stats from "../../../components/stats/stats";
import Icon from "react-native-vector-icons/Ionicons";

export const ProfilScreen = () => {
  const navigation = useNavigation();

  const back = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={profilStyle.screen}>
      <StatusBar animated={true} backgroundColor="#F5F5F5" barStyle="dark-content" />

      <View style={profilStyle.header}>
        <View style={profilStyle.iconContainer}>
          <Icon name="arrow-back" size={wp("8%")} color="rgba(135, 135, 135, 0.68)" onPress={() => back()} />
        </View>
        <Text style={profilStyle.profil}>Profil</Text>
      </View>

      <View style={profilStyle.contentContainer}>
        <View style={profilStyle.form}>
          <View style={profilStyle.picAndName}>
            <View style={profilStyle.profilPic}></View>
            <Text style={profilStyle.userName}> Nom </Text>
          </View>

          <View style={profilStyle.stats}>
            <Text style={profilStyle.Titre}> Mes Stats</Text>

            <Stats categorie="Nombre de Traitrise" points="27" />
            <Stats categorie="Total de points" points="158" />
            <Stats categorie="Position dans la course" points="1er" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
