import React from 'react';
import {TextInput,StyleSheet,View} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar=({term,onSubmit,onChange})=>{
    return <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput 
        value={term}
         style={styles.inputStyle}
            placeholder="search"
          onChangeText={onChange}
          onEndEditing={onSubmit}  />
    </View>
    
};

const styles=StyleSheet.create({
    container:{
        marginLeft:10
    },
    background:{
        marginTop:10,
        backgroundColor:'grey',
        height:50,
        borderRadius:5,
        marginHorizontal:10,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
     flex:1,
     fontSize:18,
     marginHorizontal:10
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:5

    }
});

export default SearchBar;