import React from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native";
import { INPUT_COLOR } from "../commons/constants";

interface Props {
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  changeForm: (property: string, value: string) => void; //función modificar el estado del formulario (LoginScreen)
  property: string; //propiedades del objeto del formulario
  isPassword?: boolean; //para indicar si es un campo de contraseña
}

export const InputComponent = ({
  placeholder,
  keyboardType,
  changeForm,
  property,
  isPassword = false,
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={(value) => changeForm(property, value)}
      secureTextEntry={isPassword} //para el campo de contraseña
      style={styles.inputText}
    />
  );
};

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: INPUT_COLOR,
    color: "black",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 7,
  },
});
