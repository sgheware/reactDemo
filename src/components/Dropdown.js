import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';

export default function DropdownAcct() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Apple', code: 'AP' },
        { name: 'Samsung', code: 'SA' },
        { name: 'Dell', code: 'DL' }
        
    ];

    const [selectedStore, setSelectedStore] = useState(null);
    let store =[];
    let imgurl;
    
    if(selectedCity != null){
    if(selectedCity.code ==="AP"){
         store = [
            { name: 'Apple Store#1', code: 'ST1' },
            { name: 'Apple Store#2', code: 'ST2' },
            { name: 'Apple Store#3', code: 'ST3' }
            
        ];
        imgurl="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg";
    }
    if(selectedCity.code==="SA"){
         store = [
            { name: 'Samsung 1', code: 'ST1' },
            { name: 'Samsung 2', code: 'ST2' }           
            
        ];
        imgurl="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg";
    }
    if(selectedCity.code==="DL"){
         store = [
            { name: 'Dell 1', code: 'ST1' },
            { name: 'Dell 2', code: 'ST2' }           
            
        ];
        imgurl="https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg";
    }
}

console.log(selectedCity);    

    return (
        <div className="card flex justify-content-end">
            <img src={imgurl} width={30} height={30} alt="Account"/>
            <FloatLabel className="w-full md:w-15rem" >
                <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full" />
                <label htmlFor="dd-city">Account</label>
            </FloatLabel>

            <FloatLabel className="w-full md:w-15rem" >
                <Dropdown inputId="dd-store" value={selectedStore} onChange={(e) => setSelectedStore(e.value)} options={store} optionLabel="name" className="w-full" />
                <label htmlFor="dd-store">Store</label>
            </FloatLabel>
        </div>
        
        
    )
}