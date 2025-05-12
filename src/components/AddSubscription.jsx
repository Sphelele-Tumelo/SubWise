

import React, {useState} from 'react'

const AddSubscription = ({onAdd}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [renewalDate, setRenewalDate] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();

        const newSub = {
            id: Date.now(),
            name,
            price: parseFloat(price),
            renewalDate,
        };

        onAdd(newSub);
        setName('');
        setPrice('');
        setRenewalDate('');
    };

    return (
        

        
        <form onSubmit={handleSubmit} className='bg-gray-800 p-4 mt-10 rounded shadow mb-4 text-gray-200  space-y-4  max-w-xl mx-auto'>
            <h3 className="text-lg font-semibold">Add New Subscription</h3>
            <input type="text"
            placeholder='Subscription Name'
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            className="w-full border rounded px-3 py-2 "
            required /> 
          
            <input type="number"
            placeholder='Monthly Price (R)'
            value={price}
            onChange={(e) => {setPrice(e.target.value)}}
            className="w-full border rounded px-3 py-2 "
            required /> 
            
            <input type="date"
            value={renewalDate}
            onChange={(e) => {setRenewalDate(e.target.value)}}
            className="w-full border rounded px-3 py-2 "
            required />

            <button type="submit" className="bg-emerald-500 text-white px-4 py-2 rounded hover:rounded-full hover:bg-emerald-600" >Add Subscription</button>
        </form>
        
    );
};

export default AddSubscription;


