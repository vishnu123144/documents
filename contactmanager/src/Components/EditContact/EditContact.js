import React from 'react'

import {useState,useEffect} from "react";
import { useHistory} from 'react-router';
import {useParams} from 'react-router-dom';

export default function EditContact(props) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // function setFirstname(e)
    // {
    //   setFname(e.target.value);
    // }
      let { id }=useParams();
      useEffect(() => {
         fetch(`http://localhost:3002/contacts/${id}`)
              .then(res=>res.json())
              .then(data=>{setFname(data.fname)
              setLname(data.lname)
              setPhone(data.phone)
              setEmail(data.email)
              }
              );
        
      }, [])
      let history = useHistory();
      function EditContact() {
          fetch(`http://localhost:3001/contacts/${id}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ fname, lname, email,  phone })
          }).then(res => {
              history.push('/');
          });
      }
  
    return (
        <div className="container mt-3">
            <div className="row">
                <h2>Edit Contact</h2>
                <div className="col-md-4 offset-md-3" >
                    <div className="mb-2">
                        <input  type="text" onChange={(e)=>setFname(e.target.value)} value={fname} className="form-control" placeholder="First name"/>
                    </div>
                    <div className="mb-2">
                        <input  type="text" onChange={(e)=>setLname(e.target.value)} value={lname} className="form-control" placeholder="Last name"/>
                    </div>
                    <div className="mb-2">
                        <input  type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" placeholder="Email"/>
                    </div>
                    <div className="mb-2">
                        <input  type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} className="form-control" placeholder="Mobile"/>
                    </div>
                    <div className="mb-2">
                     <button  type="button" onClick={EditContact}  className="btn btn-primary">Save Changes</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
