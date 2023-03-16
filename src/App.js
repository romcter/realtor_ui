import './App.module.css';
import {Header, DropDown, Nav} from './components'
import {Route, Routes} from "react-router-dom";
import React from "react";
import AdvertisementComponent from "./components/advertisement/AdvertisementComponent";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>

            <Routes>
                <Route path='/flat-sale' element={<AdvertisementComponent/>}/>
            </Routes>
        </div>
    );
}
export default App;
