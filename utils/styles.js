import {StyleSheet} from 'react-native';
import {black,white,gray,grayLight,sMain,sDark} from './colors';
export const styleLibrary = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:grayLight,
  },
  //Decks styles
  listItem : {
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    marginBottom:5,
    paddingTop:10,
    paddingBottom:10,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: white,
    shadowColor: black,
    shadowOffset:{width:0,height:2},
    shadowOpacity:.8,
    shadowRadius:2,
    elevation:2,
  },
  listItemTitle:{
    fontWeight:'bold',
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
  },
  buttonContainer:{
    alignItems:'center',
    justifyContent:'flex-end',
  },
  subTitleText:{
    marginLeft:15,
    marginTop:5,
    fontSize:25,
    color:gray,
  },
  containerCard:{
    backgroundColor:white,
    margin:10,
    padding:10,
    shadowColor: black,
    shadowOffset:{width:0,height:2},
    shadowOpacity:.8,
    shadowRadius:2,
    elevation:2,
  },
  //Button DeckDetail
  detailContainer: {
    flex:1,
    justifyContent:'center',
  },
  buttonRaised:{
    marginTop:20,
    padding:10,
    width:150,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:2,
    shadowColor: black,
    shadowOffset:{width:0,height:2},
    shadowOpacity:.8,
    shadowRadius:2,
    elevation:2,
  },
  buttonFlat:{
    padding:10,
    width:190,
  },
  buttonFlatText:{
    color:sDark,
    alignItems:'center',
    marginRight:15,
    fontSize:22,
  },
  detailDeckTitle:{
    fontSize:45,
    fontWeight:'bold',
    textAlign:'center'
  },
  detailDeckSubTitle:{
    fontSize:25,
    color:gray,
    textAlign:'center'
  },
  detailDeckButtonText:{
    color:black,
    fontSize:22,
  }
})
