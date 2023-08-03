import { useState } from 'react'
import './style.css'

const ReactContact = () => {



    const [user, setUser] = useState(
        {
            name: '',
            email: '',
            phone: '',
            address: '',
            message: '',
        }
    )
    let name, value
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value })

    }

    const postData = async (e) => {
        e.preventDefault()

        const {name,email,phone,address,message} = user

        if(name && email && phone && address && message){

            
            const res = await fetch('https://react-firebase-form-55274-default-rtdb.firebaseio.com/react-firebase-form.json',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    address,
                    message,
                })
            })
            
            
            if(res){
                setUser({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    message: '',
                })
                
                alert("Data Stored Successfully")
            }
            
        }else{
            alert("Please fill all the data")
        }
        }
        
        return (
            <>
            <div className="outerContainer">

                <div className='container'>
                    <form method='POST'>
                        <div className='heading'>Contact Us</div>


                        <div className="form-container">

                            <div className="field">
                                <span className="span-label">Name</span>
                                <input type="text" name='name' required value={user.name} onChange={getUserData} placeholder='Enter your Name' />

                            </div>

                            <div className="field">
                                <span className="span-label">Email</span>
                                <input type="email" name='email' required value={user.email} onChange={getUserData} placeholder='Enter your Email address' />

                            </div>

                            <div className="field">
                                <span className="span-label">Phone Number</span>
                                <input type="text" name='phone' required value={user.phone} onChange={getUserData} placeholder='Enter your Phone number' />

                            </div>

                            <div className="field">
                                <span className="span-label">Address</span>
                                <input type="text" name='address' required value={user.address} onChange={getUserData} placeholder='Enter your Address' />

                            </div>

                            <div className="textarea-field">
                                <span className="span-label">Message</span>
                                <textarea name="message" rows="7" required value={user.message} onChange={getUserData} placeholder="Enter your message"></textarea>
                            </div>



                        </div>
                        <button className='btn' type="submit" onClick={postData}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ReactContact