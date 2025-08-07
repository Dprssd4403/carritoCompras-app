import React, { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import { PRIMARY_COLOR } from "../commons/constants";
import { TitleComponent } from "../components/TitleComponent";
import { BodyComponent } from "../components/BodyComponent";
import { styles } from "../theme/appTheme";
import Icon from "react-native-vector-icons/MaterialIcons";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { TouchableOpacity } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

export const RegisterScreen = () => {
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //funcion para modificar el estado del formulario
  const changeForm = (property: string, value: string): void => {};

  const navigation = useNavigation();

  //funcion permitir registro
  const handleRegister = (): void => {};

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Registrate" />
      <BodyComponent>
        <Text style={styles.titleWelcome}>Estas muy cerca!</Text>
        <Text style={styles.textDescription}>
          Realiza tus compras de manera rápida y segura
        </Text>
        <View style={styles.containerForm}>
          <InputComponent
            placeholder="Nombre"
            keyboardType="default"
            changeForm={changeForm}
            property=""
          />
          <InputComponent
            placeholder="Usuario"
            keyboardType="default"
            changeForm={changeForm}
            property="username"
          />
          <InputComponent
            placeholder="Contraseña"
            keyboardType="default"
            changeForm={changeForm}
            property="password"
            isPassword={hiddenPassword}
          />
          <Icon
            name={hiddenPassword ? "visibility" : "visibility-off"}
            size={20}
            color={PRIMARY_COLOR}
            style={styles.iconForm}
            onPress={() => setHiddenPassword(!hiddenPassword)}
          />
        </View>
        <ButtonComponent textButton="Registrarse" handleLogin={handleRegister} />
        <TouchableOpacity
          onPress={() =>
            navigation.dispatch(CommonActions.navigate({ name: "Login" }))
          }
        >
          <Text style={styles.textRedirect}>
            Ya tienes una cuenta? Inicia sesión ahora
          </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  );
};
