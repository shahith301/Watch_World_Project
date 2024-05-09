import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import MyHome from '../../mycontainers/MyHome';
export default function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MyHome />} />
            </Routes>
        </BrowserRouter>
    );
}
