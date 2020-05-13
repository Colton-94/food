import React from 'react';
import {View ,Text, StyleSheet, Image} from 'react-native';


const ResultDet=({item})=>{
return <View style={styles.container}>
        <Image style={styles.image} source={{ uri :item.image_url}} />
        <Text style={styles.text}>{item.name}</Text>
<Text>{item.rating}Stars, {item.review_count}Reviews</Text>
</View>
};
const styles=StyleSheet.create({
    image:{
        width:150,
        height:100,
        borderRadius:7,
        
    },
    text:{
        fontWeight:'bold',
        marginTop:3
    },
    container:{
        marginLeft:10
    }
});

export default ResultDet;