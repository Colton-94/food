import axios from 'axios';


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer rB8EpmfuAIMl1R2cPHnmxlmzQEb5xDsXjf8Gxi5RjEMbqRb7y6kmGCT03DIEOe8G75FJSVNQHOwrbKVfX0lW27RsplfMz1zvxWZ6hqVKxn5wo2bei4C6vv7HNKu5XnYx'
    }    
});