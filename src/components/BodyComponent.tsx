import React, { ReactNode } from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { SECONDARY_COLOR } from '../commons/constants';

//Componente reutilizable
interface Props{
    children: ReactNode;
}
export const BodyComponent = (props: any) => {
    console.log(props);

    //hook useWindowDimensions permite obtener las dimensiones de la pantalla
    const {height} = useWindowDimensions();
  return (
    <View style={{...styles.container,
        height: height *0.88
    }}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:SECONDARY_COLOR,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:40,
        paddingTop:30
    }
});
