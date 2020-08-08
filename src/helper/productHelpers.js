import React from 'react';
import {View, Text, Image, Linking, StyleSheet } from 'react-native';

export function freeChecker(price){
        return price==0?'Free':price+ ' GBP';
    }

export function priceFormatter (Price,discount_type,discount) {
    if (!discount_type)
        return <Text style={{ fontSize: 16, color: 'white' }}>{freeChecker((Price / 100).toFixed(2))}</Text>
    else
        return <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 16, color: 'red',textDecorationLine:'line-through',textDecorationColor:'red' }}>{(Price / 100).toFixed(2)}</Text>
            <Text style={{marginHorizontal:10, fontSize: 16, color: 'white' }}>{freeChecker(((discount) / 100).toFixed(2)) }</Text>
        </View>
}