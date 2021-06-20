import React, {useState}from 'react'
import { Form } from 'react-bootstrap';
import Axios from 'axios'

export default function ParcelOrderForm() {

    const url = "https://safe-courier-server-api.herokuapp.com/parcels";

    const [RecipientsName, setRecipientsName] = useState('');
    const [Contact, setContact] = useState('');
    const [PickupLocation, setPickupLocation] = useState('');
    const [Destination, setDestination] = useState('');
    const [City, setCity] = useState('');
    const [Order, setOrder] = useState('');

        const [parcel, setParcel] = useState({RecipientsName: '', Contact: '', pickupLocation: '', Destination: '', City: '', Order: ''})
        const newParcelOrder = {
                        RecipientsName: parcel.RecipientsName, Contact: parcel.Contact, pickupLocation: parcel.pickupLocation,
                         Destination: parcel.Destination, City: parcel.City, Order: parcel.Order
        }


            const handleSubmit = (e)=>{

                e.preventDefault()

                Axios.post(url, newParcelOrder).then(response =>{
                    console.log(response)
                    setParcel(response)
                });

                
                setRecipientsName('');
                setContact('');
                setPickupLocation('');
                setDestination('')
                setCity('')
                setOrder('')
            }

    return (
        <div>
             <form className="order-form" method="POST" onSubmit={handleSubmit} >
                <label>Name</label>
                <input type="text" placeholder="Recipients full name" value={RecipientsName} onChange={(e)=>{setRecipientsName(e.target.value)}} required />
                <label>Contact Number</label>
                <input type="text" placeholder="Recipients phone number" value={Contact} onChange={(e)=>{setContact(e.target.value)}} required />
                <label>Order</label>
                <textarea cols="35" rows="5" value={Order} onChange={(e)=>{setOrder(e.target.value)}} ></textarea>
                    <small>
                    <Form.Text muted>
                    Please include the link of the item, quantity, and code of the item

                    </Form.Text>
                    </small>
                    
                
                <label>Pickup Location</label>
                <input type="text" placeholder="Your Street Address" required value={PickupLocation} onChange={(e)=>{setPickupLocation(e.target.value)}} />

                <label>Destination</label>
                <input type="text" placeholder="Recipients Street Address" required value={Destination} onChange={(e)=>{setDestination(e.target.value)}} />

                <label>City/State</label>
                <input type="text" placeholder="Your City" required value={City} onChange={(e)=>{setCity(e.target.value)}} />
                
           
            <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}