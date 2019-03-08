import React, {useState} from 'react'
import './contact.css'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'

const Contact = () => {

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })

    const {name,email,message} = inputs

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    
    const sendMessage = () => {
        let body = {
            subject: `${name} has contacted you`,
            email: `${email}`,
            message: `${message}  Response Email: ${email}`
        }

        axios.post('/api/sendmail', body)
            .then(res => {
                res.sendStatus(200)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBar/>
            <div className='contact-page'>
                <h1>Contact Us</h1>
                <p>
                    Please contact us using the form below if you have any questions or need any additional information.
                </p>
                <div className='contact-form'>
                    <div className='name-div'>
                        { 
                            name &&
                            <span className='place-name'>Name</span>
                        }
                        <input className='name-input' onChange={handleChange} placeholder='Name' name='name'/>
                    </div>
                    <div className='email-div'>
                        { 
                            email &&
                            <span className='place-email'>Email Address</span>
                        }
                        <input className='email-input' onChange={handleChange} placeholder='Email Address' name='email'/>
                    </div>
                    <div className='message-div'>
                        { 
                            message &&
                            <span className='place-message'>Message</span>
                        }
                        <textarea rows='6' className='message-input' onChange={handleChange} placeholder='Message' name='message'/>
                    </div>
                    <div>
                        <button onClick={() => sendMessage()} className='mail-button'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact


