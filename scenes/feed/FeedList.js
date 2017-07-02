import React,{Component} from  'react';
import {View,Text} from 'react-native';
import { Metrics, ApplicationStyles } from '../../themes/'

export default class FeedList extends Component{
    render(){
      return (<View style={ApplicationStyles.screen.centercontainer}>
                <Text>I am feed list</Text>
              </View>)
    }
}
