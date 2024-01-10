import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const acceuilStyle = StyleSheet.create({
  screen: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },

  mesGroupesContainer: {
    height: "30%",
    // backgroundColor: "green",
    marginHorizontal: 20,
    marginTop: 15,
  },
  mesDemandesContainer: {
    height: "30%",
    // backgroundColor: "pink",
    marginHorizontal: 20,
  },
  searchContainer: {
    height: "30%",
    // backgroundColor: "cyan",
    marginHorizontal: 20,
  },
  sectiontitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 15,
    marginTop: 10,
  },

  groupContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 70,
    borderRadius: 20,
    marginBottom: 10,

    shadowColor: "#000000",
    //IOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    //Android
    // elevation: 10
  },
  groupPic: {
    backgroundColor: "rgba(47, 154, 254, 0.47)",
    height: 55,
    width: 55,
    borderRadius: 180,
    marginLeft: 20,
    marginRight: 10,
  },
  groupName: {
    fontSize: 16,
    fontWeight: "500",
  },

  input: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingLeft: 15,
    height: 35,
  },
  // Footer
  boutonAjouter: {
    alignItems: "center",
    marginBottom: 10,
  },
  pressableAjouter: {
    backgroundColor: "#0094FF",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    borderRadius: 90,
  },
  textAjouter: {
    fontWeight: "500",
    color: "white",
  },
});
