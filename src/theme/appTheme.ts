import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    titleWelcome:{
        fontSize:17,
        fontWeight:'bold',
        color:PRIMARY_COLOR,

    },
    textDescription:{
        fontSize: 15,
        color: PRIMARY_COLOR,
        paddingVertical:10
    },
    containerForm:{
        marginBottom: 10
    },
    iconForm:{
        position: 'absolute',
        bottom: 15,
        right:10
    },
    textRedirect:{
        fontSize: 15,
        fontWeight:'bold',
        color: PRIMARY_COLOR,
        textAlign:'center',
        marginTop:20,
    }
})