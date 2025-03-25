import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../Context/Provider";

function useFoodData() {
    const { filterProduct } = useContext(UserContext);
    // console.log(filterProduct)
    const { data: isData, isLoading, refetch } = useQuery({
        queryKey: ["alldata"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/fooddata?sort=${filterProduct}`);
            console.log(data)
            return data;
        }
    })
    // console.log(isData)
    return { isData, isLoading }

}

export default useFoodData;