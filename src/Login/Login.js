import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const Login = () => {
    const [error,setError] = useState('')
    const {signIn, setLoading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useState();
      
     const from = location.state?.from?.pathname ||  '/';

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.rest();
            setError('');
         if(user.emailVerified){
            navigate(from,{replace:true})
         }
         else{
            toast.error('YOur emai is not verified  please verified email')
         }
        })

        .catch(error =>{
            console.error(error)
            setError(error.message)
        })
        .finally(()=>{
            setLoading(false);

        })



    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                {error}
            </Form>

        </div>
    );
};

export default Login;