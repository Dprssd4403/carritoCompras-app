import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { styles } from "../../../theme/appTheme";
import { PRIMARY_COLOR } from "../../../commons/constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Cart } from "../HomeScreen";
import { useStateForPath } from "@react-navigation/native";

interface Props {
  visible: boolean;
  setShowModal: () => void;
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
}

export const ModalCart = ({ visible, setShowModal, cart, setCart }: Props) => {
  const { width } = useWindowDimensions();

  
  const handleClearCart = () => {
    // Limpiar el carrito
    setCart([]);
    //cerrar modal
    setShowModal();
  };

  //funcion para calcular el total a pagar
  const totalPay = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.total;
    });
    return total;
  };
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.containerModal}>
        <View style={{ ...styles.modal, width: width * 0.8 }}>
          <View style={styles.headerModal}>
            <Text style={styles.titleModal}>Mis Productos</Text>
            <View style={styles.containerIcon}>
              <Icon
                name="cancel"
                size={18}
                color={PRIMARY_COLOR}
                onPress={setShowModal}
              />
            </View>
          </View>
          <View style={localStyles.headerTable}>
            <Text style={localStyles.textHeaderTable}>Producto</Text>
            <View style={localStyles.headerTableInfo}>
              <Text
                style={{ ...localStyles.textHeaderTable, marginHorizontal: 7 }}
              >
                Pre.
              </Text>
              <Text style={localStyles.textHeaderTable}>Cant.</Text>
              <Text
                style={{ ...localStyles.textHeaderTable, marginHorizontal: 7 }}
              >
                Total
              </Text>
            </View>
          </View>
          <View>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View style={localStyles.headerTable}>
                  <Text>{item.name}</Text>
                  <View style={localStyles.headerTableInfo}>
                    <Text
                      style={{
                        ...localStyles.textHeaderTable,
                        marginHorizontal: 9,
                      }}
                    >
                      {item.price.toFixed(2)}
                    </Text>
                    <Text
                      style={{
                        ...localStyles.textHeaderTable,
                        marginHorizontal: 6,
                      }}
                    >
                      {item.quantity}
                    </Text>
                    <Text
                      style={{
                        ...localStyles.textHeaderTable,
                        marginHorizontal: 9,
                      }}
                    >
                      {item.total.toFixed(2)}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <View style={localStyles.containerTotalPay}>
            <Text style={localStyles.textTotalPay}>
              Total pagar: ${totalPay().toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buttonAddCart}
            onPress={handleClearCart}
          >
            <Text style={styles.buttonAddCartText}>COMPRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const localStyles = StyleSheet.create({
  headerTable: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTableInfo: {
    flexDirection: "row",
  },
  textHeaderTable: {
    fontWeight: "bold",
    fontSize: 15,
    color: PRIMARY_COLOR,
  },
  containerTotalPay: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  textTotalPay: {},
});
