import { StyleSheet, Platform, Dimensions} from 'react-native';
import {scale,  verticalScale } from '@utils/scale';
import * as CONST from '@constants/colors';

export default StyleSheet.create({
    container:{
       flex:1,
        padding:12,
        alignItems:"center",
        
      },
    topContainer:{
        height:verticalScale(100),
        backgroundColor:'red'
    },
    midContainer:{
        padding:10,
        alignItems:'center'
    },
    heading:{
        fontSize: scale(40)
    },
    smalllHeading: {
        fontSize: scale(12)
    },
    loginContainer:{
        marginTop:10,
        padding:10,
    },
    textInput:{
        margin:10,
        padding:5,
        width: scale(220),
        height: verticalScale(40),
        borderWidth:1,
        borderColor: CONST.BORDER_COLOR
    },
    loginButton:{
        margin:10,
        height: verticalScale(40),
        width: scale(220),
        backgroundColor: CONST.BUTTON_COLOR,
        justifyContent:'center',
        alignItems:'center'
    },
    loginButtonText:{
        fontSize: scale(14),
        color: CONST.WHITE_COLOR
    },
    errorText:{
        marginLeft:10,
        color: CONST.ERROR_COLOR,
        fontSize: scale(10)
    }
});