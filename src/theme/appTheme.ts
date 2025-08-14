import { StyleSheet } from "react-native";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
} from "../commons/constants";

//appTheme usar globalStyles para estilos globales
export const styles = StyleSheet.create({
  titleWelcome: {
    fontSize: 17,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
  },
  textDescription: {
    fontSize: 15,
    color: PRIMARY_COLOR,
    paddingVertical: 10,
  },
  containerForm: {
    marginBottom: 10,
  },
  iconForm: {
    position: "absolute",
    bottom: 15,
    right: 10,
  },
  textRedirect: {
    fontSize: 15,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    textAlign: "center",
    marginTop: 20,
  },

  containerModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    padding: 20,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 10,
  },
  headerModal: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 10,
  },
  containerIcon: {
    flex: 1,
    alignItems: "flex-end",
    position: "absolute",
    top: 0,
    right: 0,
  },
  titleModal: {
    fontSize: 18,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
  },
  imageModal: {
    width: 160,
    height: 160,
  },
  containerImageM: {
    alignItems: "center",
  },
  containerQuantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonQuantity: {
    height: 50,
    width: 50,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    borderRadius: 25,
  },
  buttonQuantityText: {
    color: SECONDARY_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },
  textQuantity: {
    fontSize: 18,
  },
  buttonAddCart: {
    backgroundColor: TERTIARY_COLOR,
    marginTop: 15,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonAddCartText: {
    color: SECONDARY_COLOR,
    fontWeight: "bold",
  },
  textStock: {
    fontSize: 18,
    color: '#873424',
    textAlign: "center",
  },
});
