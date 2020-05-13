import React,{useState}from 'react';
import {Text,StyleSheet,View} from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from '../screens/hooks/useResults';
import ResultList from './components/ResultList';
import { ScrollView } from 'react-native-gesture-handler';


const SearchScreen=()=>{
    
    const [term,setTerm]=useState('');
    const [searchApi,err,results]=useResults();          
 const resultFilter=(price)=>{
    return results.filter(result=>{
         return result.price===price;
        });
    };
    return ( 
        <>
            <SearchBar 
                term={term}
                onChange={setTerm}
                onSubmit={()=>searchApi(term)}/>
            {err? <Text>{err}</Text>:null}
            
            <ScrollView>
            <ResultList results={resultFilter('$')} title='cheaper'/>
            <ResultList results={resultFilter('$$')}title='bit high'/>
            <ResultList results={resultFilter('$$$')}title='costly'/>
           </ScrollView>
        </>
    );  
};

const styles=StyleSheet.create({
    container:{
      // marginTop:10
    }
});

export default SearchScreen;