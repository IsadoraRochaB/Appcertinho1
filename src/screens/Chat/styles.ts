import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.isa,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor:
    colors.black,
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
  },
  rowSearch: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 20,
    margin: 40,
    alignItems: 'center',
    width: "80%",
    height: 45,
  },
  input: {
    width: "80%"
  },
  icon: {
    fontSize: 24,
    padding: 5,
    color: colors.blue,
  }
})

export default styles;