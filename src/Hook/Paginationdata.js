import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function usePagination (){
    const { data: isData, isLoading } = useQuery({
        queryKey: ["alldata"],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:5000/_page=${2}&_limit=3");
            // console.log(data)
            return data;
        }
    })
    
    return {isData,isLoading}
    
}

export default usePagination;