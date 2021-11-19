import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


 export const GifExpertApp = ()=>{


    const [categories, setcategories] = useState(['one punch'])

    //const handleAdd =() =>{
       // setcategories([...categories,'uno mas']);
    //    setcategories(sc=> [...sc,'unos mas 2']);
  //  }

    return (
        <>
            <h2>gifExpertApp</h2>
            <hr/>
            <AddCategory setcategories={setcategories}/>

            <ol>
                {
                    categories.map(category=>{
                    //    return <li key ={category}>{category}</li>
      
                      return  <GifGrid 
                            key = { category }
                            category = { category }
                        />
                    })
                }
            </ol>
        </>
    );

};
