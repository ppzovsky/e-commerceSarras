import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#1c1c1c", // Dark background
  },
  formContainer: {
    width: "80%",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
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
  button: {
    marginTop: 20,
    backgroundColor: "#008000",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
