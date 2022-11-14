import axios from 'axios';
    
    export default axios.create({
     baseURL: "http://172.30.99.142:1337/",
     headers: {
       "Content-type": "application/json",
     },
    });