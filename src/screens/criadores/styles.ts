import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#151515",
  },
  contato: {
    flex: 0.16,
    width: "90%",
    flexDirection: "row",
    borderRadius: 8,
    elevation: 10,
    shadowColor: "#020202",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: "#232327",
  },
  perfil: {
    height: "100%",
    width: "37%",
    alignItems: "center",
    justifyContent: "center",
  },
  foto: {
    height: "90%",
    width: "90%",
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#FFCB11",
  },
  quad: {
    height: "100%",
    width: "63%",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    height: "45%",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textShadowRadius: 7,
    textShadowOffset: { width: -1, height: 1 },
    textShadowColor: "#020202",
  },
  margem: {
    flex: 0.10,
    width: "90%",
  },
});
