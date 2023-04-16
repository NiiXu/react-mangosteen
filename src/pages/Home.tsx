import React, {useEffect} from 'react';
import p from '../assets/images/pig.svg'
import add from '../assets/icons/add.svg'
import axios from 'axios';
import useSWR from 'swr'
export const Home: React.FC = () => {
    const { data: meData, error: meError } = useSWR('/api/v1/me', (path) => {
        return axios.get(`http://121.196.236.94:8080${path}`)
    })
    const { data: itemsData, error: itemsError } = useSWR(meData ? '/api/v1/items' : null, (path) => {
        return axios.get(`http://121.196.236.94:8080${path}`)
    })
    console.log(meData, meError, itemsData, itemsError)

    return <div>
        <div className="flex justify-center items-center">
            <img className="mt-20vh mb-20vh" width="128" height="130" src={p}/>
        </div>
        <div className="px-16px">
            <button className="h-48px w-100% bg-#5C33BE b-none text-white
            rounded-8px">开始记账
            </button>
        </div>
        <button className="w-56px h-56px bg-#5C33BE rounded-50% b-none text-white
        text-6xl fixed bottom-16px right-16px">
            <img src={add} className="max-w-100% max-h-100%"/>
        </button>
    </div>
}


