import {useEffect,useState} from 'react';
import yelp from '../apis/yelp';


export default ()=>{
const [results,setResults]=useState([]);
const [err,setErr]=useState('');


const searchApi=async(term)=>{
try{
const resp=await yelp.get('/search',{
    params:{
        limit:50,
        term:term,
        location:'san jose'
    }
});
setResults(resp.data.businesses)
}catch(err){
setErr('something went wrong');
}
}; 

useEffect(()=>{
searchApi('pizza');

},[]);

return [searchApi,err,results];
};