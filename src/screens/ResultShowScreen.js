import React ,{useState,useEffect}from 'react';
import {Text, View,StyleSheet,FlatList,Image} from 'react-native';
import yelp from './apis/yelp';

const ResultShowScreen=({navigation})=>{
    const [result,setResult]=useState(null);


    const id=navigation.getParam('id');
  
    const getResult=async(id)=>{
        const resp=await yelp.get(`/${id}`);
        setResult(resp.data);


    };
    

    useEffect(()=>{
        getResult(id)
    },[]);






    if(!result){
        return null;
    }

    return (
       
    <View>
        <Text>{result.name}</Text>
           <FlatList 
           
           showsHorizontalScrollIndicator={false}
           keyExtractor={photo=>photo}
           data={result.photos}
           renderItem={({item})=>{
               return <Image style={styles.image} source={{uri:item}} />
           }}
           />
    </View>
    );
};

const styles=StyleSheet.create({
    image:{
        height:150,
        width:150,
        margin:2,
        borderRadius:5
    }
    
    
    
});


export default ResultShowScreen;