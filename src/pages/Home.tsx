import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom'
import p from '../assets/images/pig.svg'
import add from '../assets/icons/add.svg'
import useSWR from 'swr'
import {ajax} from '../lib/ajax';
import { useTitle } from '../hooks/useTitle'
import {Loading} from '../components/Loading';
import {AddItemFloatButton} from '../components/AddItemFloatButton';
interface Props {
    title?: string
}
export const Home: React.FC<Props> = (props) => {
    useTitle(props.title)
    const { data: meData, error: meError } =
        useSWR('/api/v1/me', async path =>
        (await ajax.get<Resource<User>>(path)).data.resource)
    const { data: itemsData, error: itemsError } =
        useSWR(meData ? '/api/v1/items' : null, async path =>
        (await ajax.get<Resources<Item>>(path)).data)

    const isLoadingMe = !meData && !meError
    const isLoadingItems = meData && !itemsData && !itemsError

    if (isLoadingMe || isLoadingItems) {
        return <Loading/>
    }

    if (itemsData?.resources[0]) {
        return <Navigate to="/items" />
    }

    return <div>
        <div className="flex justify-center items-center">
            <img className="mt-20vh mb-20vh" width="128" height="130" src={p}/>
        </div>
        <div className="px-16px">
            <button className="h-48px w-100% bg-#5C33BE b-none text-white
            rounded-8px">开始记账
            </button>
        </div>
        <AddItemFloatButton/>
    </div>
}


