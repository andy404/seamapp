import React,{Component} from 'react';
import {Text, View} from 'react-native';
import { Metrics, ApplicationStyles } from '../../themes/';
import LoginStatusMessage  from '../components/LoginStatusMessage';
import AuthButton from '../components/AuthButton';

 class  HomeScreen extends Component {
  render(){
      return (<View style={ApplicationStyles.screen.centercontainer}>
                    <LoginStatusMessage/>
                    <AuthButton/>
            </View>)
  }
}


export default HomeScreen;
