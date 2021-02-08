
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";


export default class App extends React.Component {
  
  render(){
  return (
    
  <AppContainer/>

  
  
  
  );
}
}
const TabNavigator = createBottomTabNavigator({
  WriteStory: { screen: WriteStoryScreen },
  ReadStory: { screen: ReadStoryScreen }
}, 
{
defaultNavigationsOptions: ({navigation}) => ({
  tabBarIcon : ({}) => {
    const routeName = navigation.state.routeName
    if(routeName === "WriteStory"){
      return(
        <Image
        source = {require('./assets/write.png')}
        style = {styles.tabImage}/> 
      ) 
    }
    else if (routeName === "ReadStory"){
      return(
        <Image
        source = {require('./assets/read.png')}
        style = {styles.tabImage}
        /> 
      )
    }
  }
})
});


const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
   tabImage: {
     width: 50,
     height:50
   }
});