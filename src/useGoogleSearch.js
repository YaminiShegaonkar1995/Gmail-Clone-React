import React, { useEffect, useState } from "react";
import API_KEY from "./Key";

const CONTEXT_KEY = " e181cc0b63553acb9 ";

const useGoogleSearch=(term)=>{
   
    const [ data,setData] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customersearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();
    },[term])
    
    return {data}
};
export default useGoogleSearch;