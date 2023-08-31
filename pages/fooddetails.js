import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

import renderRatingIcons from './renderRatingIcons';
function Fooddetails({route}) {
  const { dish } = route.params;
  return (
    <View style={styles.container}>
    <View style={styles.imgContainer}>
      <Image source={{ uri: dish.image_url }} style={styles.img}/>
    </View>

    <Text style={styles.dish_name}>
      {dish.dish_name}
    </Text>

    <Text style={styles.boldText}>
      {dish.description} 
    </Text>
<View style={styles.container4}>
    <View style={styles.container2}>
      <Text style={styles.price}>Price:</Text>
      <Text style={styles.p}>{dish.price}$</Text> 
    </View>

    <View style={styles.container3}>
      <Text style={styles.price}>Rating:</Text>
      <View style={styles.imageContainer}>
      {/* <Image source={{ uri: dish.rating }} style={styles.image}/> */}
      {renderRatingIcons(dish.rating)}
      </View>
    </View>
    
    </View>
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  dish_name:{
    color:'black'
    ,fontSize:40,
    margin:30
  },
  container: {
    
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    marginTop:30
    // justifyContent: 'center',
  },
  container2:{
    marginTop:20,
    flexDirection: 'row',
  },
  container3:{
    marginTop:20,
    flexDirection: 'row',
    
  },
  boldText:{
    marginHorizontal:20,
    color:'black'
    ,fontWeight:'bold'
  },
  price:{
    color:'black',
    fontSize:15
    ,fontWeight:'bold'
    ,
  },
  p:{
    color:'black'
    ,fontSize:15
  },
  imageContainer: {
    // marginLeft: 10,
    // height:5,
    // width:10
    flexDirection:'row'
    ,height:20
    ,width:50
  },
  image:{
    marginTop:0,
    height:15,width:70
  },
  imgContainer: {
    
    marginBottom:40,
    height:200,
    width:"90%",

  },
  img:{
    height:250,
    width:"auto",
    borderRadius:10
  },
  container4:{
    marginTop:20,
    flexDirection: 'column',
    justifyContent:'space-between'
  },
});
export default Fooddetails;