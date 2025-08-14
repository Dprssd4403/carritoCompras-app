import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { PRIMARY_COLOR } from "../commons/constants";
import { RegisterScreen } from "../screens/RegisterScreen";
import { useState } from "react";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";

//interface para los objetos de mi arreglo users
export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
  //arreglo con la lista de usuarios
  const users: User[] = [
    {
      id: 1,
      name: "Christopher Espinosa",
      username: "dprssd",
      password: "123456",
    },
    {
      id: 2,
      name: "Yessica Gamez",
      username: "kingdome",
      password: "654321",
    },
  ];

  //hook useState permitir gestionar el estado del arreglo de usuarios
  const [listUsers, setListUsers] = useState<User[]>(users);

  //funcion para agregar nuevos usuarios al arreglo (listUsers)
  const addUser = (user: User) => {
    //modificar el estado del arreglo
    setListUsers([...listUsers, user]);
  };

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: PRIMARY_COLOR,
        },
      }}
    >
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        children={() => <LoginScreen users={listUsers} />}
      />
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        children={() => <RegisterScreen users={listUsers} addUser={addUser} />}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
