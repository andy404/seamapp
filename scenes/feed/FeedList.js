import React,{Component} from  'react';
import {View,Text,Image} from 'react-native';
import { Metrics, ApplicationStyles,Images } from '../../themes/'

export default class FeedList extends Component{
    render(){
      return (<View style={ApplicationStyles.screen.centercontainer}>
                <Text>I am feed list</Text>
              </View>)
    }
}
