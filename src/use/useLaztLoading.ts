import { useEffect, useState } from "react";
import { useInView } from "react-cool-inview";
import useSWRInfinite from "swr";
// import axios from "axios";
import {Data} from './Data'

export const useLaztLoading = () => {

    const [items, setItems] = useState<any>([]);
    const [page, setPage] = useState<number>(0);

    const size:number = 20;
    const { data, error, isValidating } = useSWRInfinite(`${import.meta.env.VITE_APP_URL_API}user?page=${page}&size=${size}`, async (url: string) => {
        // let { data }:any = await axios.get(url)
        // console.log(Data)
        return Data;
    })
 
    const { observe } = useInView({
        threshold: 0.25,
        onEnter: () => {
            setPage((page: any) => page + 1);
        },
    });


    useEffect(() => {

        if (!!page && Array.isArray(data) && Array.isArray(items)) {
            setItems((oldItems: any) => [...oldItems, ...data]);
        }
        if (Array.isArray(data) && !page) {
            setItems(data);
        }

    }, [data || page]);


    return {  items, page, size, observe }


}