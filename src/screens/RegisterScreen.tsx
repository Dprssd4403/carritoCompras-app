import React, { useState } from "react";
import { Alert, StatusBar, Text, View } from "react-native";
import { PRIMARY_COLOR } from "../commons/constants";
import { TitleComponent } from "../components/TitleComponent";
import { BodyComponent } from "../components/BodyComponent";
import { styles } from "../theme/appTheme";
import Icon from "react-native-vector-icons/MaterialIcons";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { TouchableOpacity } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { User } from "../navigator/StackNavigator";

//interface para las propiedades
interface Props {
  users: User[];
  addUser: (user: User) => void;
}

interface FormRegister {
  name: string;
  username: string;
  password: string;
}

export const RegisterScreen = ({ users, addUser }: Props) => {
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: "",
    username: "",
    password: "",
  });

  //funcion para modificar el estado del formulario
  const changeForm = (property: string, value: string): void => {
    // console.log(property + ": " + value);
    setFormRegister({ ...formRegister, [property]: value });
  };

  const navigation = useNavigation();

  //función para verificar si existe el usuario
  const verifyUsername = (): User | undefined => {
    const existUser = users.find((user) => user.username === formRegister.username);
    return existUser;
  };
  //funcion para generar los ids de los nuevos usuarios
  const getIdUser = (): number => {
    const getId = users.length + 1; //length devuelve el número de elementos en el arreglo
    return getId;
  };

  //funcion permitir registro
  const handleSignUp = (): void => {
    if (
      formRegister.name == "" ||
      formRegister.username == "" ||
      formRegister.password == ""
    ) {
      Alert.alert("Error", "Por favor, complete todos los campos");
      return;
    }

    //validar que no exista el usuario
    if (verifyUsername() != undefined) {
      Alert.alert("Error", "El usuario ya existe");
      return;
    }

    //Crear el nuevo usuario (objeto)
    const newUser: User = {
      id: getIdUser(),
      name: formRegister.name,
      username: formRegister.username,
      password: formRegister.password,
    };

    //Agregar el nuevo usuario en el arreglo
    addUser(newUser);
    Alert.alert('Exito', 'Usuario registrado correctamente');
    navigation.goBack();
    //console.log(formRegister);
  };

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
            property="name"
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
        <ButtonComponent textButton="Registrarse" onPress={handleSignUp} />
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
