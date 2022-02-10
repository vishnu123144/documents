import React from 'react'
import {useState } from "react";
import { useHistory } from 'react-router';

import {v4 as uuidv4} from "uuid";

export default function AddContact(props) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // function setFirstname(e)
    // {
    //   setFname(e.target.value);
    // }
    let history =useHistory();
    function addContactHandler() {
        fetch('http://localhost:3002/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: uuidv4(), fname, lname, email,phone })
        }).then(res => {
            history.push('/');
        });
    }

    



    //props.contactEvent({fname,lname,email,phone});
    // console.log({fname,lname,email,phone});
     
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-3" >
                    <div className="mb-2">
                        <input id="fname" type="text" onChange={(e)=>setFname(e.target.value)} className="form-control" placeholder="First name"/>
                    </div>
                    <div className="mb-2">
                        <input id="lname" type="text" onChange={(e)=>setLname(e.target.value)} className="form-control" placeholder="Last name"/>
                    </div>
                    <div className="mb-2">
                        <input id="email" type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email"/>
                    </div>
                    <div className="mb-2">
                        <input id="phone" type="text" onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Mobile"/>
                    </div>
                    <div className="mb-2">
                     <button id="btnadd" type="button" onClick={addContactHandler}  className="btn btn-primary">AddContact</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
    }
