import React, { useState } from "react";
import { Text, View, Pressable, PanResponder, Animated } from "react-native";
import { AddTraitriseStyle } from "./addTraitriseStyle";
import CustomTextInput from "../customTextInput/customTextInput";

const AddTraitrise = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [traitrise, setTraitrise] = useState("");
  const [points, setPoints] = useState("");
  const [multiplicateur, setMultiplicateur] = useState("");

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

  return (
    <Animated.View // Utilisez Animated.View pour appliquer les transformations animées
      style={[
        AddTraitriseStyle.container, // Appliquez les styles de base du composant
        {
          transform: [{ translateY: panY }], // Appliquez la transformation translateY animée en fonction de la valeur de panY
        },
      ]}
      {...panResponder.panHandlers} // Attachez les gestionnaires du PanResponder ici
    >
      <View style={AddTraitriseStyle.closeScroll}></View>
      <Text style={AddTraitriseStyle.title}>Nouvelle Traitrise</Text>

      <CustomTextInput
        placeholder={"Nom"}
        placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
        keyboardType={"default"}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <CustomTextInput
        placeholder={"Type de traitrise"}
        placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
        keyboardType={"default"}
        onChangeText={(text) => setTraitrise(text)}
        value={traitrise}
      />
      <CustomTextInput
        placeholder={"Nombre de points"}
        placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
        keyboardType={"default"}
        onChangeText={(text) => setPoints(text)}
        value={points}
      />
      <CustomTextInput
        placeholder={"Multiplicateur"}
        placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
        keyboardType={"default"}
        onChangeText={(text) => setMultiplicateur(text)}
        value={multiplicateur}
      />

      <Pressable style={[AddTraitriseStyle.button]} onPress={() => null}>
        <Text style={AddTraitriseStyle.buttonText}>Valider</Text>
      </Pressable>
    </Animated.View>
  );
};

export default AddTraitrise;
