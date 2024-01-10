import { StyleSheet } from "react-native";

export const CreateGroupStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  closeScroll: {
    borderWidth: 1,
    width: "20%",
    height: "2%",
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(217, 217, 217, 1)",
    borderRadius: 30,
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  groupPic: {
    backgroundColor: "rgba(47, 154, 254, 0.47)",
    height: 55,
    width: 55,
    borderRadius: 180,
    marginLeft: 20,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#0094FF",
    height: 40,
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
});
