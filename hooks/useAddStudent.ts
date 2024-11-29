import useSWR from "swr";
import axios from "axios";

export const useAddStudent = (path : string) => {
    const { data, error, mutate } = useSWR(path);
    const addStudent = async (data : any) => {
        try {
            const res = await axios.post(path, data);
            mutate();

            if (res.status !== 200) {
                throw new Error(`Error not add data: ${res}`);
            }

        } catch (error) {
            console.log(error);
        }
    }
    return addStudent;
}