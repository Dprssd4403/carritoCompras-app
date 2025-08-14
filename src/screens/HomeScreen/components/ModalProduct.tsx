import React, { useState } from "react";
import { Image, useWindowDimensions, View } from "react-native";
import { Modal, Text } from "react-native";
import { styles } from "../../../theme/appTheme";
import { Product } from "../HomeScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import { PRIMARY_COLOR } from "../../../commons/constants";
import { TouchableOpacity } from "react-native";

//interface para las propiedades
interface Props {
  visible: boolean;
  item: Product;
  setShowModal: () => void;
  updateStock: (id: number, quantity: number) => void;
}

export const ModalProduct = ({
  visible,
  item,
  setShowModal,
  updateStock,
}: Props) => {
  //hook useWindowsDimensions permite tomar la dimensiión de la pantalla
  const { width } = useWindowDimensions();

  //hook useState para manejar el estado del contador
  const [quantity, setQuantity] = useState<number>(1);

  //funcion para agregar al carrito
  const handleAddCart = () => {
    //llamar funcion para actualizar el stock
    updateStock(item.id, quantity);
    //cerrar modal
    setShowModal();
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.containerModal}>
        <View style={{ ...styles.modal, width: width * 0.8 }}>
          <View style={styles.headerModal}>
            <Text style={styles.titleModal}>
              {item.name} - $ {item.price.toFixed(2)}
            </Text>
            <View style={styles.containerIcon}>
              <Icon
                name="cancel"
                size={18}
                color={PRIMARY_COLOR}
                onPress={setShowModal}
              />
            </View>
          </View>
          <View style={styles.containerImageM}>
            <Image source={{ uri: item.pathImage }} style={styles.imageModal} />
          </View>
          {item.stock == 0 ? (
            <Text style={styles.textStock}>Producto Agotado</Text>
          ) : (
            <View>
              <View>
                <View style={styles.containerQuantity}>
                  <TouchableOpacity
                    style={styles.buttonQuantity}
                    onPress={() => setQuantity(quantity + 1)}
                    disabled={quantity == item.stock}
                  >
                    <Text style={styles.buttonQuantityText}>+</Text>
                  </TouchableOpacity>

                  <Text style={styles.textQuantity}>{quantity}</Text>

                  <TouchableOpacity
                    style={styles.buttonQuantity}
                    onPress={() => setQuantity(quantity - 1)}
                    disabled={quantity == 1}
                  >
                    <Text style={styles.buttonQuantityText}>-</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.textQuantity}>
                    Total: ${(item.price * quantity).toFixed(2)}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonAddCart}
                  onPress={handleAddCart}
                >
                  <Text style={styles.buttonAddCartText}>Agregar Carrito</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
