import { View, Text, StyleSheet} from 'react-native'
import React, { Component } from 'react'

import GetKeyModule from '../../nativeModules/getKey';
   
export default class KeyScreen extends Component {
    constructor(props) {
        super(props);
        this.state={key:0}
    }
   
    componentDidMount() {
        GetKeyModule.getKey(
            (key) => {
              this.setState({key:key})
              console.log('KEEEY : '+key)
            })
      
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
               <Text style={{flex:1,textAlign:'center',textAlignVertical:'center'}}> Service Key = {!__DEV__?'le475jUm1D  (Production Key)': this.state.key+'  (Debug Key)'}</Text>
            </View>
        )
    }
}

