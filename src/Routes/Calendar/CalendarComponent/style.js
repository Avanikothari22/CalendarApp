import { StyleSheet} from 'react-native';
import {scale,  verticalScale } from '@utils/scale';
import actualDimensions from '@utils/deviceDimensions';

import * as CONST from '@constants/colors';

export default StyleSheet.create({
    container:{
       flex:1,
        padding:12,
       // alignItems:'center',
        justifyContent:'center'
        
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
        height: verticalScale(40),
        width: scale(100),
        margin:5,
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
    },
    addIconContainer:{
        marginTop: verticalScale(50),
        alignItems:'flex-end',
        padding: 12,
    },
    modalContainer:{
        position:'absolute',
        height: actualDimensions.height,
        width: actualDimensions.width,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalBoxContainer:{
        height: actualDimensions.height/3,
        width: actualDimensions.width/1.3,
        backgroundColor: CONST.WHITE_COLOR,
        padding:12
    },
    modalHeadingContainer:{
        padding:4,
        borderBottomColor: CONST.GREY_COLOR,
        borderBottomWidth:1,
        alignItems:'center'
    },
    modalContentContainer:{
        alignItems:'center'
    },
    modalButtonContainer:{
        flexDirection: 'row',
        justifyContent:'space-between'
        
    }
});