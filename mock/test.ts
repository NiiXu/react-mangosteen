// test.ts

import {MockConfig, MockMethod} from 'vite-plugin-mock'

// @ts-ignore
export default [
    {
        url: '/api/v1/me',
        method: 'get',
        timeout: 5000,
        response: () => {
            return {
                id: 1,
                email: '@qqq.com'
            }
        }
    },
    {
        url: '/api/v1/items',
        method: 'get',
        timeout: 5000,
        response: () => {
            return {
               resources:[{
                   id:1,
                   user_id:1,
                   amount:1000,
               }],
                pager:{
                    page:1,
                    per_page:25,
                    count:10,
                }
            }
        }
    },
]as MockMethod[]
