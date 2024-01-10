import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView, Text, Modal, View, StatusBar, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { acceuilStyle } from "./acceuilScreenStyle";
import CreateGroup from "../../../components/createGroup/createGroup";
import { getUserGroups, getUserGroupsDemands } from "../../../services/groupService/groupService";
import { AuthContext } from "../../../AuthContext";

const GroupComponent = ({ groupName }) => {
  return (
    <TouchableOpacity style={acceuilStyle.groupContainer}>
      <View style={acceuilStyle.groupPic}></View>
      <Text style={acceuilStyle.groupName}>{groupName}</Text>
    </TouchableOpacity>
  );
};

const DemandGroupComponent = ({ groupName }) => {
  return (
    <View style={acceuilStyle.groupContainer}>
      <View style={acceuilStyle.groupPic}></View>
      <View>
        <Text style={acceuilStyle.groupName}>{groupName}</Text>
        <Text>
          <Text>Status : </Text>
          <Text style={{ color: "#0094FF" }}>En attente</Text>
        </Text>
      </View>
    </View>
  );
};

export const AcceuilScreen = () => {
  const authContext = useContext(AuthContext);
  const [search, setSearch] = useState(null);
  const [isVisibleModalCreate, setIsVisibleModalCreate] = useState(false);
  const [userGroups, setUserGroups] = useState([]);
  const [userGroupsDemands, setUserGroupsDemands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserGroupsData = async () => {
      const responseGroups = await getUserGroups(authContext.token, authContext.userId);
      setUserGroups(responseGroups.groups);

      const responseDemands = await getUserGroupsDemands(authContext.token, authContext.userId);
      setUserGroupsDemands(responseDemands.groups);

      setIsLoading(false);
    };

    getUserGroupsData();
  }, []);

  async function handleSearch() {}
  async function toggleModalCreate() {
    setIsVisibleModalCreate(!isVisibleModalCreate);
  }

  return (
    <SafeAreaView style={acceuilStyle.screen}>
      <StatusBar animated={true} backgroundColor="#F5F5F5" barStyle="dark-content" />

      <View style={acceuilStyle.mesGroupesContainer}>
        <Text style={acceuilStyle.sectiontitle}>Mes groupes</Text>

        <ScrollView>
          {isLoading ? (
            <ActivityIndicator size={"small"} color={"blue"} />
          ) : userGroups && userGroups.length > 0 ? (
            userGroups.map((group, index) => (group && group.name ? <GroupComponent key={index} groupName={group.name} /> : null))
          ) : (
            <Text>Rejoignez un groupe !</Text>
          )}
        </ScrollView>
      </View>

      <View style={acceuilStyle.mesDemandesContainer}>
        <Text style={acceuilStyle.sectiontitle}>Mes demandes</Text>

        <ScrollView>
          {isLoading ? (
            <ActivityIndicator size={"small"} color={"blue"} />
          ) : userGroupsDemands && userGroupsDemands.length > 0 ? (
            userGroupsDemands.map((group, index) => (group && group.name ? <DemandGroupComponent key={index} groupName={group.name} /> : null))
          ) : (
            <Text>Rejoignez un groupe !</Text>
          )}
        </ScrollView>
      </View>

      <View style={acceuilStyle.searchContainer}>
        <Text style={acceuilStyle.sectiontitle}>Trouvez un groupe</Text>
        <TextInput style={acceuilStyle.input} onChangeText={handleSearch} value={search} placeholder="SearchBar" />
      </View>

      <View style={acceuilStyle.boutonAjouter}>
        <TouchableOpacity style={acceuilStyle.pressableAjouter} onPress={toggleModalCreate}>
          <Text style={acceuilStyle.textAjouter}> Créer un groupe </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isVisibleModalCreate} animationType="none" transparent={true}>
        <CreateGroup onClose={toggleModalCreate} />
      </Modal>
    </SafeAreaView>
  );
};
