import React, { useState } from 'react';



const Contact = () => {
    const [data,setdata]=useState({
        fullname:'',
        email:'',
        phone:'',
        message:'',
    }); 
    const inputEvent = (event)=>{
const {name,value} = event.target;
setdata((preVal)=>{
    return{
        ...preVal,
        [name]:value,
    };
});
    };
    const formSubmit = (e) =>{
e.preventDefault();
        alert(`My name is ${data.fullname}.My email is ${data.email}.My phone is ${data.phone}.My message is ${data.message}`)
    };
    return (
<>
<div className="my-5">
    <h1 className="text-center">Contact us</h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formSubmit}> 
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="name" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent}  placeholder="Enter name"  required/>
  </div>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent}  placeholder="name@example.com" required />
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlInput1">Phone </label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent}  placeholder="0987654" required />
                            </div>

                          
                                
                              
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={inputEvent}  rows="3" required></textarea>
                                </div>
                                <div className="col-12">
                                <button type="submit" class="btn btn-outline-primary">Submit</button></div>
</form>


        </div>
    </div>
</div>
</>

    );
}

export default Contact;
 