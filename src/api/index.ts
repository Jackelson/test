import axios from 'axios';

export const getMenu:any =async () => {
    const res = await  axios({
        method:'get',
        url: '/getmenu'
    })
    return res.data
}