import React from 'react';
import {View, Text,StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import ResultDet from './ResultDet';
import {withNavigation} from 'react-navigation';

const ResultList=({title, results, navigation})=>{
    if(!results.length){
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{title }</Text>
        <FlatList style={styles.flat}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result=>result.id}
            renderItem={({item})=>{
                return (
                <TouchableOpacity onPress={()=>{navigation.navigate('ResultShow',{id:item.id})}  }>   
                    <ResultDet item={item} />
                </TouchableOpacity>
            )
            }}
            />
    </View>;
};

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
    }   ,
    container:{
      marginBottom:10
    }
});

export default withNavigation(ResultList);