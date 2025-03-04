import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useFoodData (){
    const { data: isData, isLoading } = useQuery({
        queryKey: ["alldata"],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:5000/fooddata");
            // console.log(data)
            return data;
        }
    })
    
    return {isData,isLoading}
    
}

export default useFoodData;