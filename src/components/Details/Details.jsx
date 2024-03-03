import React, { useEffect, useState } from 'react';
import './Details.css'
import axios from 'axios';


const Details = (props) => {

    // const {firstName, lastName, email, contact} = props

    useEffect(()=>{
        fetch(`https://65e3c45d88c4088649f606a7.mockapi.io/users`)
        .then(response => response.json())
        .then(data => console.log(data));
    },[])

    return (
        <div>
            <h2>Full Name = {} </h2>
            <p>Email: {}</p>
            <p>Phone: {}</p>
        </div>
    );
};

export default Details;