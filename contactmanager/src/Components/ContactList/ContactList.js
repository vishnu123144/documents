import React,{useEffect, useState} from 'react'

import Contact from '../Contact/Contact'

export default function ContactList() {
    const [contacts, setContacts] = useState([
    ]);

    useEffect(() => {
        fetch('http://localhost:3002/contacts')
             .then(res=>res.json())
             .then(data=>setContacts(data));
        
    }, [])

    function DeleteContactFunction(id)
    {
     let   filterContacts=contacts.filter(x=>x.id!==id)
        setContacts(filterContacts);
        fetch(`http://localhost:3002/contacts/${id}`,
        {
            method:'DELETE'

        })
         
    }
    return (
        <div className="container mt-3" >
           <h2 id="maincomp">Contact List</h2>
          
            <div className="row">
                
                
                   {
                       contacts.map(item=> <Contact DeleteContact={DeleteContactFunction} id={item.id} key={item.phone} fname={item.fname} lname={item.lname} 
                       
                       email={item.email} phone={item.phone}
                       />)
                   }
                 
                </div>
            
            
        </div>
    )
}
