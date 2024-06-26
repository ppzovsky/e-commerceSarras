import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#1c1c1c",
  },
  profileContainer: {
    width: "80%",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    color: "#888",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#fff",
    backgroundColor: "#444",
  },
  changePassword: {
    color: "#888",
    textAlign: "center",
    paddingTop: 30,
    textDecorationLine: "underline",
    fontSize: 15
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#e50914",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  creatorsButton: {
    marginTop: 20,
    alignItems: "center",
  },
  creatorsButtonText: {
    fontWeight: '400',
    color: "#fff",
    fontSize: 14,
    textDecorationLine: "none",
  },
  margem: {
    flex: 0.10,
    width: "90%",
  },
});
