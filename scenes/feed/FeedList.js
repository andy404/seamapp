import React,{Component} from  'react';
import {View,Image,StyleSheet,TouchableHighlight,TouchableOpacity} from 'react-native';
import { Metrics, ApplicationStyles,Images } from '../../themes/'
import { Container, Content, Card, CardItem,List,ListItem, Text,
   Icon, Right,Left,Thumbnail,Body,Footer,Button, Grid,Col,Row ,Toast} from 'native-base';
import  Overlay  from 'react-native-overlay';
import {BlurView} from 'react-native-blur';
import _ from 'lodash';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  absolute: {
   position: "absolute",
   top: 0, left: 0, bottom: 0, right: 0,
 },
 image: {
       flex: 1,
       height: 100,
       width:null,
       justifyContent: 'flex-end'

   }
})

const userfeed = [
  { profileid:"123",
    name:"Asha",
    images:[{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"},
            {uri:"http://lorempixel.com/200/200/fashion/?dt=23"},
          {uri:  "http://lorempixel.com/200/200/fashion/?dt=231"},
          {uri:  "http://lorempixel.com/200/200/fashion/?dt=232"},
          {uri:  "http://lorempixel.com/200/200/fashion/?dt=1233"},
          {uri:  "http://lorempixel.com/200/200/fashion/?dt=1234"}]
  },
  { profileid:"124",
    name:"Arvee",
    images:[  {uri:"http://www.placecage.com/200/200"},
    {uri:"http://lorempixel.com/200/200/fashion/?dt=123"},
  {uri:  "http://lorempixel.com/200/200/fashion/?dt=103"},
  {uri:  "http://lorempixel.com/200/200/fashion/?dt=113"},
  {uri:  "http://lorempixel.com/200/200/fashion/?dt=323"},
  {uri:  "http://lorempixel.com/200/200/fashion/?dt=13"}]
  }
]

export default class FeedList extends Component{
    render(){
      let navigation = this.props.navigation;
      return (
             <Container style={{marginTop:40}}>
                <Content  >
                {
                  userfeed.map(function(item,index){
                    return  (<Card key={item.profileid}>
                      <CardItem header>
                          <Text>{item.name} Collection</Text>
                      </CardItem>
                      <CardItem body >
                          <Grid >
                          <Row >
                            {
                              _.map(_.take(item.images,3),function(image,i){
                                  return (<Col style={{ backgroundColor: '#635DB7', height: 100,margin:1 }} key={i}>
                                  <TouchableHighlight   style={styles.image} onPress={()=>
                                    navigation.dispatch({type:'ProfileScreen'})} >
                                       <Image source={{uri:image.uri}}
                                      style={styles.image} />
                                      </TouchableHighlight>
                                   </Col>)
                              })

                            }
                              </Row>
                             <Row>
                              {
                                _.map(_.take(_.slice(item.images,3),3),function(image,i){
                                    return (<Col style={{ backgroundColor: '#635DB7', height: 100,margin:1 }} key={i}>
                                          <Image source={{uri: image.uri}}
                                              style={styles.image} />
                                            </Col>)
                                })
                              }
                             </Row>
                           </Grid>
                        </CardItem>
                    </Card>)
                  })
                }
                </Content>
              </Container>


     )
    }
}
