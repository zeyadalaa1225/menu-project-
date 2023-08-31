import { NativeAppEventEmitter } from "react-native"
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView}from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import Foodlist from "./foodlist";
import food from "./../../food.json"
function Menu({navigation})
{
    const menu_section=food.menu_sections;
return(
        <ScrollView>
        {

        menu_section.map((section) => (
        <View key={section.id}>
                <Text style={styles.header}>{section.section_name}</Text>
                <Foodlist dishes={section.dishes} navigation={navigation}></Foodlist>

        </View>
      ))}
        </ScrollView>
)
}
const styles=StyleSheet.create({
    header:{
        marginLeft:30,
        fontWeight:"bold",
        fontSize:30,
        marginTop:20
    },
    box:{
      marginHorizontal:30,
      marginVertical:15,
      padding:10,
      backgroundColor:"#DBDBDB",
      borderRadius:30
    },
    logo:{
        width: 300,
        height: 200
        
    },
    subtitle:{
        marginTop:10,
        fontSize:20,
        color:'black',
        textAlign:'center',
    }
})
export default Menu;