import React, { useContext, useState } from "react";
import { Text, View, PanResponder, Animated, TouchableOpacity } from "react-native";
import { CreateGroupStyle } from "./createGroupStyle";
import CustomTextInput from "../customTextInput/customTextInput";
import { createGroup } from "../../services/groupService/groupService";
import { createMemberships } from "../../services/membershipsService/membershipsService";
import { AuthContext } from "../../AuthContext";

const CreateGroup = ({ onClose }) => {
  const [groupname, setGroupName] = useState("");
  const authContext = useContext(AuthContext);

  // Créez une nouvelle instance d'Animated.Value pour suivre la position verticale
  const panY = new Animated.Value(0); // Définir panY en dehors de la fonction de composant

  // Créez un PanResponder pour détecter les gestes de glissement
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true, // Autorise le PanResponder à démarrer
    onPanResponderMove: (event, gestureState) => {
      // Mettez à jour la position verticale lors du glissement vers le bas
      if (gestureState.dy > 0) {
        panY.setValue(gestureState.dy); // Mettez à jour la valeur de panY avec la position du geste
      }
    },
    onPanResponderRelease: (event, gestureState) => {
      // Lorsque l'utilisateur relâche le geste de glissement
      if (gestureState.dy > 50) {
        // Si le geste de glissement atteint une certaine distance vers le bas,
        // fermez le modal d'ajout en appelant la fonction onClose
        onClose();
      }
      // Réinitialisez la position verticale à zéro pour réinitialiser l'animation
      panY.setValue(0);
    },
  });

  async function create() {
    const group = {
      name: groupname,
      user_id: authContext.userId,
    };
    console.log("groupe :", group);
    try {
      const response = (await createGroup(authContext.token, group)) as any;

      try {
        const memberships = {
          user_id: authContext.userId,
          group_id: response.group.id,
          status: "Admis",
          totalPoints: 0,
        };

        console.log("memberships", memberships);

        // await createMemberships;
      } catch (error) {
        console.error("Failed to create Admin status: ", error);
      }
    } catch (error) {
      console.error("Failed to create a group:", error);
    }
  }

  return (
    <Animated.View // Utilisez Animated.View pour appliquer les transformations animées
      style={[
        CreateGroupStyle.container, // Appliquez les styles de base du composant
        {
          transform: [{ translateY: panY }], // Appliquez la transformation translateY animée en fonction de la valeur de panY
        },
      ]}
      {...panResponder.panHandlers} // Attachez les gestionnaires du PanResponder ici
    >
      <View style={CreateGroupStyle.closeScroll}></View>
      <Text style={CreateGroupStyle.title}>Nouveau Groupe</Text>

      <View style={CreateGroupStyle.groupPic}></View>
      <CustomTextInput
        placeholder={"Nom"}
        placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
        keyboardType={"default"}
        onChangeText={(text) => setGroupName(text)}
        value={groupname}
      />

      <TouchableOpacity style={[CreateGroupStyle.button]} onPress={create}>
        <Text style={CreateGroupStyle.buttonText}>Valider</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CreateGroup;
