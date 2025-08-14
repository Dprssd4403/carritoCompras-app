import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Product } from "../HomeScreen";
import { PRIMARY_COLOR } from "../../../commons/constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ModalProduct } from "./ModalProduct";

interface Props {
  item: Product; //cada producto del arreglo
  updateStock: (id:number, quantity:number) => void;
}
export const CardProduct = ({ item, updateStock }: Props) => {
  //hook useState manejar el estado del modal
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.pathImage }} />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text>Precio: ${item.price.toFixed(2)}</Text>
        </View>
        <View style={styles.containerIcon}>
          <Icon
            name="add-shopping-cart"
            size={30}
            color={PRIMARY_COLOR}
            onPress={() => setShowModal(!showModal)}
          />
        </View>
      </View>
      <ModalProduct visible={showModal} item={item} setShowModal={() => setShowModal(!showModal)} updateStock={updateStock} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 2,
    borderColor: "#ccc",
    borderStyle: "solid",
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    width: 60,
    height: 60,
  },
  containerIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
});
