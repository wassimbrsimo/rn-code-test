import React from 'react';
import {View, Text, Image, Linking, StyleSheet } from 'react-native';
import Product from '../../components/Product/index'
import {priceFormatter} from '../../helper/productHelpers'
import { ScrollView } from 'react-native-gesture-handler';
const Details = (props) => (
    <View style={styles.container}>
        <ScrollView>
        <Image style={styles.productImage} source={{ uri: props.route.params.product.image }} />
        <Text style={styles.title}>{props.route.params.product.name}</Text>
        <View style={{flex:1,backgroundColor:'black',padding:10,borderRadius:20,marginHorizontal:'35%',marginVertical:20}}>
        {priceFormatter(props.route.params.product.price,props.route.params.product.discount_type,props.route.params.product.discount)}
        </View>
        <Text style={styles.description}> {props.route.params.product.description}</Text>
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor: 'white',
    },
    productImage: {
        borderRadius: 10,
        height:300,width:400
    },
    title:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        
    },
    price:{
        fontSize:20,
        fontWeight:'normal',
        textAlign:'center',
    },
    description:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'normal',
        color:'gray',
    }
});

export default Details;