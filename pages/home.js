import { NativeAppEventEmitter } from "react-native"
import {View,Text,TouchableOpacity,StyleSheet,Image}from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
function Home({navigation})
    {
return(
<View style={styles.Conatiner}>
    <View style={styles.TextContainer}>
        <Image source={require('./../assets/finedine.png')} style={styles.logo}/>
        <Text style={styles.head}>Welcome to our restaurant</Text>
    </View>

        <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('Menu')}>
            <Text style={styles.text}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.box} onPress={()=>navigation.navigate('About')}>
        <Text style={styles.text}>About</Text>
        </TouchableOpacity>
</View>
)
}
const styles=StyleSheet.create({
    Conatiner:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
    },
    TextContainer:{
        alignContent:'center',
        justifyContent:'center',
        margintop:30
    },
    logo:{
        width: 420,
        height: 200
    },
    head:{
        color:'black',
        fontSize:25,
        margintop:10,
        marginBottom:40,
        textAlign:'center'
    },
    box:{
        borderColor:'black',
        backgroundColor:"#F5F5F5",
        borderWidth:1,
        padding:10,
        paddingHorizontal:30,
        borderRadius:20,
        marginBottom:20,
        marginHorizontal:30
    },
    text:{
        fontSize:20,
        color:'black',
        textAlign:'center',
    }
})
export default Home