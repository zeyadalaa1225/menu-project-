import {View,Text,StyleSheet, ScrollView}from 'react-native'
export default  function About()
{
   return( 
    <ScrollView>
    <View style={styles.aboutContainer}>
    
            <Text style={styles.TextContainer}>Welcome to Fine Dining, where culinary excellence meets exceptional hospitality. We are a distinguished establishment committed to providing a memorable dining experience that tantalizes the senses and exceeds expectations.</Text>

            <Text style={styles.TextContainer}>At Fine Dining, we pride ourselves on our meticulous attention to detail, from the selection of the finest ingredients to the artful presentation of each dish. Our team of passionate chefs, sommeliers, and servers work in harmony to curate a menu that showcases the flavors of both local and international cuisines.</Text>

            <Text style={styles.TextContainer}>Indulge in a symphony of flavors as our talented chefs masterfully blend traditional techniques with innovative culinary concepts. Every dish is crafted with precision, ensuring a harmonious balance of textures and tastes that will leave you craving more.</Text>

            <Text style={styles.TextContainer}>Our commitment to excellence extends beyond the kitchen. Our warm and knowledgeable staff are dedicated to providing impeccable service, catering to your every need and ensuring that your dining experience is nothing short of extraordinary. We believe that great food should be accompanied by exceptional hospitality, and we strive to create an ambiance that is both elegant and inviting.</Text>

            <Text style={styles.TextContainer}>Whether you join us for a romantic dinner, a business gathering, or a special celebration, we promise to elevate your senses with our extraordinary cuisine and unparalleled service. Immerse yourself in the refined atmosphere of Fine Dining, where every visit is an occasion to savor.</Text>

            <Text style={styles.TextContainer}>We look forward to welcoming you to our esteemed establishment and creating memories that will linger long after your last bite. Experience culinary perfection at Fine Dining.</Text>

    </View>
    </ScrollView>)
}
const styles=StyleSheet.create({
    aboutContainer:
    {
        marginTop:50,
        flex:1 ,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5F5F5',
        marginBottom:50
    }
    ,
    TextContainer:{
    paddingHorizontal:20,
    letterSpacing:1,
    color:'black',
    lineHeight:30,
    fontWeight:"500",
    marginBottom:20
    }
})