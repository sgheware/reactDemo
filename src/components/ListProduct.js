import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from '../service/ProductService';
import { NavLink } from "react-router-dom";
import AddToCart from "../components/AddToCart";
import FormatPrice from "../Helpers/FormatPrice";
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import logo from '../images/williamslogo.PNG'
import { useCartContext } from "../context/cart_context";


export default function TemplateDemo() {
const { cart }=  useCartContext();

    let show = true;

    const [products, setProducts] = useState([]);
    const [products1, setProducts1] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
        ProductService.getProductsWS().then((data) => setProducts1(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (product) => {
        return <NavLink to={`/singleproduct/${product.id}`}> <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="w-15rem shadow-2 border-round" /> </NavLink>;
    };
    const colorTemplate = (product) => {
        return <button style={{width:"80%",height:"100px", backgroundColor:product.locationColor}} className='btn'></button>
    }

    const priceBodyTemplate = (product) => {
        return  <FormatPrice price={product.price} /> ;
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product) => {
        return <AddToCart product={product} />;
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-3xl text-900 font-bold">Products</span>           
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    const [selectedCity, setSelectedCity] = useState({ name: 'Apple', code: 'AP' });
    const cities = [
        { name: 'Apple', code: 'AP' },
        { name: 'Williams Sonoma', code: 'WS' }       
        
    ];

    const [selectedStore, setSelectedStore] = useState(null);
    let store =[];
    let imgurl;
    let wd = 0;
    
    if(selectedCity != null){
    if(selectedCity.code ==="AP"){
        show = true;
        
         store = [
            { name: 'Apple Store#1', code: 'ST1' },
            { name: 'Apple Store#2', code: 'ST2' },
            { name: 'Apple Store#3', code: 'ST3' }
            
        ];
        imgurl="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg";
        wd = 40;
    }
    if(selectedCity.code==="WS"){
        show = false;
       
         store = [
            { name: 'Williams 1', code: 'ST1' },
            { name: 'Williams 2', code: 'ST2' }           
            
        ];
        imgurl="https://upload.wikimedia.org/wikipedia/commons/3/30/Williams_Sonoma_logo.svg";
        wd = 120;
    }
    if(selectedCity.code==="DL"){
         store = [
            { name: 'Dell 1', code: 'ST1' },
            { name: 'Dell 2', code: 'ST2' }           
            
        ];
        imgurl="https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg";
        wd=40;
    }
}

    return (
        <div className="card">
<div className="card flex justify-content-end">
            <img src={imgurl} style={{marginRight:"25%"}} width={wd} height={40} alt="Account"/>
            <FloatLabel className="w-full md:w-15rem" >
                <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full" />
                <label style={{marginLeft:"5%", marginTop:"-7%"}} htmlFor="dd-city">Account</label>
            </FloatLabel>

            <FloatLabel className="w-full md:w-15rem" >
                <Dropdown inputId="dd-store" value={selectedStore} onChange={(e) => setSelectedStore(e.value)} options={store} optionLabel="name" className="w-full" />
                <label style={{marginLeft:"5%", marginTop:"-7%"}} htmlFor="dd-store">Store</label>
            </FloatLabel>
        </div>
            { show && 
            <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                <Column field="partNumber" header="Part Number" sortable style={{ width: '15%', fontSize:'medium' }}></Column>
                <Column field="description" header="Description" sortable style={{ width: '15%', fontSize:'medium' }}></Column>
                <Column header="Lamp Image" body={imageBodyTemplate} style={{ width: '20%' }}></Column>               
                <Column field="location" header="Location" sortable style={{ width: '15%', fontSize:'medium' }}></Column>
                <Column field="caseQuantity" header="Case Quantity" sortable  style={{ width: '15%',fontSize:'medium' }}></Column>
                <Column header="" body={statusBodyTemplate} style={{ width: '20%' }}></Column>
            </DataTable>
            }

            { !show && 
            <DataTable value={products1} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                <Column field="partNumber" header="Part #" sortable style={{ width: '8%', fontSize:'medium' }}></Column>
                <Column field="description" header="Description" sortable style={{ width: '12%', fontSize:'medium' }}></Column>
                <Column header="Lamp Image" body={imageBodyTemplate} style={{ width: '15%' }}></Column>               
                <Column field="location" header="Location in Store" sortable style={{ width: '15%', fontSize:'medium' }}></Column>
                <Column field="locationColor" body={colorTemplate} header="Location Color" sortable style={{ width: '10%', fontSize:'medium' }}></Column>
                <Column field="caseQuantity" header="Case Quantity" sortable  style={{ width: '10%',fontSize:'medium' }}></Column>
                <Column field="maxQuatity" header="Max Case Quantity" sortable  style={{ width: '10%',fontSize:'medium' }}></Column>
                <Column field="isRecycle" header="Is Recycling required" sortable  style={{ width: '5%',fontSize:'medium' }}></Column>
                <Column header="" body={statusBodyTemplate} style={{ width: '20%' }}></Column>
            </DataTable>
            }
        </div>
    );
}

        