import React from 'react';
import Navbar from './Navbar';
import Menu from './Menu';

export default function Home(){
    return(
    <div className="App">
        <Navbar/>
    <div className="content">
        <Menu/>
    </div>
    </div>
)
}