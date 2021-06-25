import Axios from 'axios'

const auth = `https://safe-courier-server-api.herokuapp.com/auth`

const getUserparcel = `https://safe-courier-server-api.herokuapp.com/users/:userId/parcels`

const parcelsurl = `https://safe-courier-server-api.herokuapp.com/parcels`

// const cancelParcelurl = "https://safe-courier-server-api.herokuapp.com/parcels/:parcelId/cancel"

const token = sessionStorage.getItem('token')

Axios.get(auth, {headers:{
    'auth-token': token
}}).then(res =>{
    console.log(res)
    sessionStorage.setItem('userId', res.data.userId)
    sessionStorage.setItem('Username', res.data.Fullname)
}).catch((err)=> console.log(err))





const userID = sessionStorage.getItem('userId')

export const getUsersParcels = () => Axios.get(getUserparcel,
    {
        headers:{
            'auth-token': token
        }
    },
    {
        params:{
            'userId': userID
        }
    }).then(res =>{
        console.log(res)
    }).catch((err)=> console.log(err))


    //get all parcels - Admin only

  Axios.get(parcelsurl, {
    headers:{
        'auth-token': token
    }
    }).then(res =>{
        console.log(res)
    }).catch((err)=> console.log(err))


    // const cancelParcelOrder = async ()=> {
    //     const parcelurl = "https://safe-courier-server-api.herokuapp.com/parcels/:parcelId"

    //     try{
    //         await Axios.get(parcelurl, {
    //             headers:{
    //                 'auth-token': token
    //             }
    //             })
    //         }
    //         catch(err){

    //         }
    //     Axios.put(cancelParcelurl,
    //         {
    //             headers:{
    //                 'auth-token': token
    //             }
    //         },
    //         {
    //             params:{
    //                 'parcelId': userID
    //             }
    //         }).then(res =>{
    //             console.log(res)
    //         }).catch((err)=> console.log(err))
    // }