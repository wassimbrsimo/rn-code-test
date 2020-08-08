import React from 'react';
import { SafeAreaView, Text, Linking, StyleSheet, useEffect } from 'react-native';
import Product from '../../components/Product/index'
const Info = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ flex: 1, textAlignVertical: 'center', textAlign: 'center' }}>
        Welcome
      </Text>
    </SafeAreaView>)
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default Info;
