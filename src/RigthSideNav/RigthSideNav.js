import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook, FaTwitch,FaWhatsapp,FaTwitter} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import Header from '../Share/Header/Header';
import { AuthContext } from '../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RigthSideNav = () => {
    // const  {providerLogin} =  useContext(AuthContext);
    // const googleProvider = new GoogleAuthProvider()
    // const handleGooleSignIn = () =>{
    //     providerLogin( googleProvider)
    //     .then(result =>{
    //         const user = result.user;
    //         console.log(user)
    //     })
    //     .catch(error=>console.log(error))

  
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGooleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>console.log(error))
    }
    return (
       

        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGooleSignIn} className='mb--2' variant="outline-primary"><FaGoogle></FaGoogle> Login width Google</Button>
                <Button variant="outline-dark" Dark><FaGithub></FaGithub> Login with Github</Button>

            </ButtonGroup>
            <div>
                <h5 className='mt-4'>Find us on </h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
            <div>
              
            </div>
            
        </div>
    );
};

export default RigthSideNav;