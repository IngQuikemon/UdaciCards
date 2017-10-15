import {StyleSheet} from 'react-native';
import {black,white,gray,grayLight,sMain} from './colors';
export const styleLibrary = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:grayLight,
    justifyContent:'space-between'
  },
  //Decks styles
  listItem : {
    marginTop:15,
    paddingTop:10,
    paddingBottom:10,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: white,
  },
  listItemTitle:{
    fontWeight:'bold',
    fontSize:30,
    textAlign:'center'
  },
  listItemSubTitle:{
    fontSize:18,
    color:gray,
    textAlign:'center'
  },
  //Add Deck styles
  addDeckContainer:{
    margin:20,
    justifyContent:'space-between',
    alignItems:'stretch',
  },
  addDeckTitle:{
    fontSize:45,
    fontWeight:'bold',
    textAlign:'center'
  },
  addDeckInput:{
    marginTop:20,
    height:70,
    fontSize:25,
  },
  addDeckButtonContainer:{
    marginTop:20,
    padding:10,
    backgroundColor:sMain,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:2,
  },
  addDeckButtonText:{
    color:black,
    fontSize:22,
  }
})
