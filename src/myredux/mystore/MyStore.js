import{configureStore} from '@reduxjs/toolkit';
import cartReducer from '../myreducer/Mycart'
export default configureStore({
    reducer:{

        cart: cartReducer
    }
    
})
