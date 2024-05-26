import { useQuery } from "@tanstack/react-query";
import { productApi } from "../../services/ProductApi";

export function useProducts(){
    const {data, isLoading} = useQuery({
        queryFn:productApi,
        queryKey:["product"]
    })

    return {data, isLoading}
}