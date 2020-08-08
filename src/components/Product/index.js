
import React,{ useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native'
import { priceFormatter, freeChecker } from '../../helper/productHelpers'

const Product = (props) => {
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(1))

    const onTouchStart = () => {
        console.log('start')
        Animated.timing(animatedValue, {
            toValue: 1.1,
            duration: 200,
            useNativeDriver: true
        }).start();
    }
   const onTouchEnd = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        }).start();
    }
    return (
        <Animated.View style={[styles.card, { transform: [{ scaleX: animatedValue ,scaleY: animatedValue }] }]}>
            <TouchableOpacity activeOpacity={0.9} onPressIn={() => onTouchStart()} onPressOut={() => onTouchEnd()} onPress={() => props.navigation.navigate('Details', { product: props.data })} style={{ justifyContent: 'center'}}>
                <View style={styles.card}>
                    <Image style={styles.productImage} source={{ uri: props.data.image }} />
                    <View style={styles.infoBar}>
                        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Text numberOfLines={1} style={{ fontSize: 16, color: 'white' }}>{props.data.name}</Text>
                                {priceFormatter(props.data.price, props.data.discount_type, props.data.discount)}

                            </View>
                            <View >
                                <Image
                                    source={{ uri: 'https://picsum.photos/id/69/40/40' }}
                                    style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
                                />
                            </View>

                        </View><Text numberOfLines={2} style={{ fontSize: 14, color: 'lightgrey' }}>{props.data.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    card: {
        elevation: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        aspectRatio: 4 / 3,
    },
    productImage: {
        flex: 1,
        borderRadius: 10,
    },
    infoBar: {
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        padding: 10,
        height: '40%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        overflow: 'hidden',
        borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    }
});
export default Product;
