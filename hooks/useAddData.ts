import axios from "axios";
import useSWR from "swr";

export const useAddData = (path : string) => {
    const { data, error, mutate } = useSWR(path);


    const addData = async (data : any) => {
        try {
            const res = await axios.post(path, data);
            mutate();
        } catch (error) {
            console.log(error);
        }
    }


    return addData;
}