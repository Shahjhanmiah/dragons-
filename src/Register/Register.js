import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted,setAccepted] = useState(AuthContext);
    const { createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.vlaue;
        const email = form.email.value;
        const password = form.password.value
        // console.log(email, password, name, photoURL, form);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.rest();
                handleUpdateUserProfile(name,photoURL)
                handleEmailVerification()
                toast.success('please verify your email adderss before login')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }
    const handleUpdateUserProfile = (name,photoURL)=>{
        const profile = {
            displaName: name,
            photoURL: photoURL

        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error));
    }
    const handleEmailVerification =  () =>{
        verifyEmail()
        .then(()=>{})
        .catch(error=>console.error(error))
    }

    const handleAccepted = event=>{
       setAccepted(event.target.checked)


    }
    return (
        <Form onSubmit={handleSubmit}>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>your name</Form.Label>
                <Form.Control type="text" name="name" placeholder="your email" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>photoURL</Form.Label>
                <Form.Control type="text" name="photoURL" placeholder="photo URL" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox" 
                onClick={handleAccepted}
                label= {<>Accept <Link to="/terms">Teram  and  condition</Link></>}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>

        </Form>

    );
};

export default Register;