import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'b41d4ce709msh9b5a0bb3f8a5adep1e1b1djsn6e6f4f7ac9f0',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: { ...query }, 
      };

      const fetchData = async ()=>{
        setIsLoading(true);
        try{
            const response = await axios.request(options);
            setData(response.data.data );
            console.log( 'this is response o ==>',response.data.data);
            setIsLoading(false);
        }catch(error){
            setError(error)
            alert('There is an error');
        }finally{
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, [])

      const refetch =()=>{
        setIsLoading(true);
        fetchData();
      }
       return{data, isLoading, error, refetch};
}


export default useFetch;