import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate, useSearchParams  } from "react-router-dom";

export const AppContext =createContext();

export default function AppContextProvider ({children})
{
    const [loading ,setLoading]= useState(false);
    const [posts ,setPosts]= useState([]);
    const [page ,setPage]= useState(1);
    const [totalPages ,setTotalPage]= useState(null); 
    const navigate = useNavigate()

    async function fetchPosts(page = 1 ,tag = null , category){
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        if(tag) {
            url += `&tag=${tag}`;
        }

        if(category){
            url += `&category=${category}`;
        }

        try{
           const result = await fetch(url);
           const data = await result.json();
           console.log(data)

           setPosts(data.posts);
           setPage(data.page)
           setTotalPage(data.totalPages)

        }
        catch{
            console.log("error in Fetching data from API")
            setPosts([]);
            setPage(1)
            setTotalPage(null)
        }
        setLoading(false)
    }
    

    function handlePageChange(page){
          navigate({search: `?page=${page}`})
        // fetchPosts(page)
          setPage(page)
          
    }




    const value = {
        loading ,
        setLoading,
        posts ,
        setPosts,
        page ,
        setPage,
        totalPages ,
        setTotalPage,
        fetchPosts,
        handlePageChange
    }

return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}