import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyHeader from '../mycomponents/MyHeader';
import MyDashboard from './MyDashboard';
import MyProduct from './MyProduct';
import MyCart from './MyCart';
import MyCheckout from './MyCheckout';
import MySuccess from './MySuccess';
export default function MyHome() {
    return (
        <div>
            <MyHeader />
            <Routes>
                <Route path="/" element={<MyDashboard />} />
                <Route path="/product/:id" element={<MyProduct/>}/>
                <Route path='/cart' element={<MyCart/>}/>
                <Route path='/checkout/'>
                <Route path='' element = { < MyCheckout/>} />
                <Route path=':id' element = { < MyCheckout/>} /> 
                </Route>
                <Route path='/success' element = { < MySuccess/>} />
            </Routes>
        </div>
    );
}