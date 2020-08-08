import { View, Text, StyleSheet, FlatList, Image, Animated } from 'react-native'
import React, { Component } from 'react'
import Product from '../../components/Product';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class Market extends Component {
    constructor(props) {
        super(props);
        this.products = require('../../../assets/products.json');
    }
    propComparator = (propName) =>
        (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

    componentDidMount() {

        this.products.sort(this.propComparator('order'))
        console.log("By name", this.products)

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView >
                    {['Pirate', 'Culinary', 'Sci-Fi'].map((item, index) => {
                        const category = item
                        return (
                            <View key={index.toString()} style={{ justifyContent: 'center', margin: 10, flex: 1, height: 300 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{item}</Text>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    data={this.products}
                                    renderItem={({ item, index }) => {
                                        if (item.category == category) {
                                            return (
                                                <View key={index.toString()} style={{ padding: 20 }}>
                                                    <Product data={item} navigation={this.props.navigation} />
                                                </View>
                                            )
                                        }
                                    }}
                                />
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}

