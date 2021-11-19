import { useEffect, useState } from "react"
import { getGif } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getGif( category ).then(images=>{
           // setTimeout(() => {
                setstate(
                    {
                        data:images,
                        loading:false
                    }
        
                );
            //}, 3000);
        });
    },[category]);

    return state;
}
