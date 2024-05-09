import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { MyProductList } from '../mydata/MyProductList';  
import { addItem } from '../myredux/myreducer/Mycart';
export default function MyProduct(){
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const props = MyProductList.find 
    ((Element) => Element.id === parseInt(params.id)
    );

    const [alert,setAlert] = useState(false);
    const list = useSelector((state) => state.cart.list);
    const element = list.find((item) => item.id === props.id)
    
    const addToCart = () => {
        setAlert(true);
        setTimeout(() => setAlert(false),4000);
        dispatch(addItem(props));
    };

    return(
        <div className="card m-2"> 
        {alert && <span className='alert alert-success'>Item added to cart</span>} 
        <div className='mt-2'>
        <img src={props.thumbnail} 
        height={300} 
        width={350}
        alt={props.title} 
        className='.border-radius-9'
        />
        </div>
        <div className=' mt-3 card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <h6 className='mt-2'>price: ₹{props.price}</h6>
        <h6 className='mt-2'>discount: {props.discountPercentage}%</h6>
        <h6 className='mt-2'>Rating: {props.rating}</h6>
        <div className='mt-4'>
                {props.stock > 0 ? (
                 <>
                <button className='btn btn-success'
                 onClick={() => navigate(`/checkout/${props.id}`)}
                 >
                    Buy Now</button>
                {element?.count > 0 ? (
                <button
                className=" ms-3 btn btn-outline-warning"
                onClick={() => navigate('/cart')}
                >
                    Go to Cart
                </button>

                ):(
                
                <button className=' ms-3 btn btn-success' onClick={addToCart}>
                Add to Cart
                </button>
                )}
                </>
                ):(
                <button className='btn btn-outline-danger'>out of stock</button>
            )}
        </div>
        </div>
        </div>
        
     
     
        
    
    );

    }