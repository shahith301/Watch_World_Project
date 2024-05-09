import React from 'react';
import MyProductCard from '../mycomponents/MyProductCard';
import { MyProductList } from '../mydata/MyProductList';
export default function MyDashboard(){
    return(
    <div className='d-flex flex-wrap justify-content-center p-3'>
        {MyProductList.map((product) => <MyProductCard {...product} key={product.id}/>)}
    </div>

    );
}