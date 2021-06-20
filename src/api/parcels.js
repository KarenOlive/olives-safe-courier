import Axios from 'axios'

const url = "https://safe-courier-server-api.herokuapp.com/parcels";
const geturl = "https://safe-courier-server-api.herokuapp.com/users/:userId/parcels"
export const createParcel = (newParcelOrder) => Axios.post(url, newParcelOrder).then(response =>{
    console.log(response)
});

export const getParcels = () => Axios.get(geturl).then(res =>{
    console.log(res)
});

// export const changeParcelDestination