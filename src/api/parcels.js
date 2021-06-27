import Axios from 'axios'

const auth = `https://safe-courier-server-api.herokuapp.com/auth`


export const baseUrl = `https://safe-courier-server-api.herokuapp.com/parcels`


const token = sessionStorage.getItem('token')


Axios.get(auth, {
    headers:{
    'auth-token': token
}}).then(res =>{
    console.log(res)
    sessionStorage.setItem('userId', res.data.userId)
    sessionStorage.setItem('Username', res.data.Fullname)
    sessionStorage.setItem('email', res.data.Email)
    
}).catch((err)=> console.log(err))









    
  


    