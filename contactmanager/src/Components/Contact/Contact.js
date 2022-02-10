import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact(props) {

    function deleteContactHandler(id)
    {
        props.DeleteContact(id);
    }

   
    return (
        <div className="col-md-3">
       
            <div className="card">
            
                <div className="card-body">
                <i className="fas fa-backspace float-end text-danger" onClick={deleteContactHandler.bind(this,props.id)}></i>
                <Link to={`edit/${props.id}`}><i className="fas fa-edit float-end text-primary px-2" ></i></Link>
                   <h5 className="card-title">{props.fname} {props.lname}</h5>
                         <p className="card-text">{props.email}</p>
                          <p>{props.phone}</p>
               </div>
              </div>
              </div>
       
    )
}
