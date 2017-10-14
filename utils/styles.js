import {StyleSheet} from 'react-native';
import {black,white,gray,grayLight} from './colors';
export const styleLibrary = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:grayLight,
  },
  listItem : {
    height:100,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: white,
  },
  listItemTitle:{
    fontWeight:'bold',
    fontSize:30,
  },
  listItemSubTitle:{
    fontSize:18,
    color:gray,
  }
})
