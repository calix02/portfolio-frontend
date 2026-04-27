import { getHomeContentApi } from "@/api/home/home.api";
import type { HomeType } from "@/types/home/home.type";
import { useEffect, useState } from "react";


export function useHomeData(){

    const [ homeData, setHomeData] = useState<HomeType | null>(null);
    const [ loading, setLoading] = useState<boolean>(true);
    
    useEffect(() =>{
    const fetchedHomeData = async () => {
        setLoading(false);
        const data = await getHomeContentApi();
        setHomeData(data.content[0]);
    };
    fetchedHomeData();

}, [])
return{homeData, loading};
}

