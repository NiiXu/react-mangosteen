import React from 'react';
import useSWR, {mutate} from 'swr';
import axios from 'axios';

const fetcher = (path:string) => {
  return axios.get<{message:string}>(path)
}
export const Home:React.FC = ()=>{
    const {data,error,isValidating,mutate} = useSWR('http://121.196.236.94:3000',fetcher)
    const isLoading = !data && ! error
    const onClick = async ()=>{
        const data = await axios.post('xxx')
        mutate(data)
    }

    if (error){
        return <div>error</div>
    }
    if (!data){
        return <div>loding..</div>
    }
    return <div>{data.data.message}</div>
}


